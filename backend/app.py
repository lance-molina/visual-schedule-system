import os
import datetime
from functools import wraps
from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
app.config['SECRET_KEY'] = os.getenv('JWT_SECRET', 'eac-cavite-modeling-simulation-secret-2026')
CORS(app, resources={r"/api/*": {"origins": os.getenv('CORS_ORIGIN', '*')}})

def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv('DB_HOST', 'localhost'),
        user=os.getenv('DB_USER', 'root'),
        password=os.getenv('DB_PASSWORD', ''),
        database=os.getenv('DB_NAME', 'visual_schedule_db')
    )

# JWT Authentication Decorator (Part 7 & 8 Protection)
def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'Authorization' in request.headers:
            parts = request.headers['Authorization'].split(" ")
            if len(parts) == 2:
                token = parts[1]
        if not token:
            return jsonify({'error': 'Authentication token is missing'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])
            current_user_id = data['user_id']
        except Exception:
            return jsonify({'error': 'Token is invalid or expired'}), 401
        return f(current_user_id, *args, **kwargs)
    return decorated

# ==========================================
# PART 7: AUTHENTICATION API
# ==========================================

@app.route('/api/auth/register', methods=['POST'])
def register():
    data = request.get_json() or {}
    name = data.get('name', '').strip()
    email = data.get('email', '').strip()
    password = data.get('password', '')
    role = data.get('role', 'Caregiver')

    if not name or not email or len(password) < 6:
        return jsonify({'error': 'Name, valid email, and password (min 6 chars) required'}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id FROM users WHERE email = %s", (email,))
    if cursor.fetchone():
        cursor.close()
        conn.close()
        return jsonify({'error': 'Email already registered'}), 409

    pw_hash = generate_password_hash(password)
    cursor.execute(
        "INSERT INTO users (name, email, password_hash, role) VALUES (%s, %s, %s, %s)",
        (name, email, pw_hash, role)
    )
    conn.commit()
    user_id = cursor.lastrowid
    cursor.close()
    conn.close()

    return jsonify({'message': 'User registered successfully', 'user_id': user_id}), 201

@app.route('/api/auth/login', methods=['POST'])
def login():
    data = request.get_json() or {}
    email = data.get('email', '').strip()
    password = data.get('password', '')

    if not email or not password:
        return jsonify({'error': 'Email and password are required'}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()

    if not user:
        return jsonify({'error': 'Invalid email or password'}), 401

    # Support seeded demo user fallback or standard hashed password
    valid_pw = False
    if user['password_hash'] == 'scrypt:32768:8:1$demo$demo_plain_fallback' and password == 'password123':
        valid_pw = True
    elif check_password_hash(user['password_hash'], password):
        valid_pw = True

    if not valid_pw:
        return jsonify({'error': 'Invalid email or password'}), 401

    token = jwt.encode({
        'user_id': user['id'],
        'role': user['role'],
        'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(hours=24)
    }, app.config['SECRET_KEY'], algorithm="HS256")

    return jsonify({
        'token': token,
        'user': {
            'id': user['id'],
            'name': user['name'],
            'email': user['email'],
            'role': user['role']
        }
    }), 200

@app.route('/api/auth/me', methods=['GET'])
@token_required
def get_me(current_user_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, name, email, role, created_at FROM users WHERE id = %s", (current_user_id,))
    user = cursor.fetchone()
    cursor.close()
    conn.close()
    if not user:
        return jsonify({'error': 'User not found'}), 404
    return jsonify(user), 200

@app.route('/api/auth/profile', methods=['PUT'])
@token_required
def update_profile(current_user_id):
    data = request.get_json() or {}
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE users SET name = %s, email = %s, role = %s WHERE id = %s",
        (data.get('name'), data.get('email'), data.get('role'), current_user_id)
    )
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Profile updated successfully'}), 200

# ==========================================
# PART 8: CHILDREN CRUD API
# ==========================================

@app.route('/api/children', methods=['GET'])
@token_required
def get_children(current_user_id):
    page = int(request.args.get('page', 1))
    limit = int(request.args.get('limit', 20))
    offset = (page - 1) * limit

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("""
        SELECT c.*,
            (SELECT COUNT(*) FROM tasks t JOIN schedules s ON t.schedule_id = s.id WHERE s.child_id = c.id) AS total_tasks,
            (SELECT COUNT(*) FROM tasks t JOIN schedules s ON t.schedule_id = s.id WHERE s.child_id = c.id AND t.status = 'completed') AS completed_tasks
        FROM children c
        WHERE c.user_id = %s
        ORDER BY c.id ASC
        LIMIT %s OFFSET %s
    """, (current_user_id, limit, offset))
    children = cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(children), 200

@app.route('/api/children', methods=['POST'])
@token_required
def create_child(current_user_id):
    data = request.get_json() or {}
    if not data.get('name') or not data.get('age') or not data.get('delay_domain'):
        return jsonify({'error': 'Name, age, and delay domain are required'}), 400

    gender = data.get('gender', 'Male')
    photo_url = (data.get('photo_url') or '').strip()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO children (user_id, name, age, gender, delay_domain, notes, photo_url) VALUES (%s, %s, %s, %s, %s, %s, %s)",
        (current_user_id, data['name'], int(data['age']), gender, data['delay_domain'], data.get('notes', ''), photo_url)
    )
    conn.commit()
    child_id = cursor.lastrowid

    # Automatically create today's schedule for the new child
    cursor.execute("INSERT INTO schedules (child_id, schedule_date) VALUES (%s, CURDATE())", (child_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Child profile created', 'id': child_id}), 201

@app.route('/api/children/<int:child_id>', methods=['GET'])
@token_required
def get_child(current_user_id, child_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM children WHERE id = %s AND user_id = %s", (child_id, current_user_id))
    child = cursor.fetchone()
    cursor.close()
    conn.close()
    if not child:
        return jsonify({'error': 'Child not found'}), 404
    return jsonify(child), 200

@app.route('/api/children/<int:child_id>', methods=['PUT'])
@token_required
def update_child(current_user_id, child_id):
    data = request.get_json() or {}
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE children SET name=%s, age=%s, gender=%s, delay_domain=%s, notes=%s, photo_url=%s
        WHERE id=%s AND user_id=%s
    """, (
        data.get('name'), data.get('age'), data.get('gender', 'Male'), data.get('delay_domain'),
        data.get('notes', ''), (data.get('photo_url') or '').strip(),
        child_id, current_user_id
    ))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Child updated'}), 200

@app.route('/api/children/<int:child_id>', methods=['DELETE'])
@token_required
def delete_child(current_user_id, child_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM children WHERE id = %s AND user_id = %s", (child_id, current_user_id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Child deleted'}), 200

# ==========================================
# PART 8: SCHEDULES CRUD API
# ==========================================

@app.route('/api/schedules/<int:child_id>', methods=['GET'])
@token_required
def get_schedules(current_user_id, child_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("""
        SELECT s.* FROM schedules s
        JOIN children c ON s.child_id = c.id
        WHERE s.child_id = %s AND c.user_id = %s
        ORDER BY s.schedule_date DESC, s.id DESC
    """, (child_id, current_user_id))
    schedules = cursor.fetchall()

    # If no schedule exists yet for this child, create one for today automatically
    if not schedules:
        cursor.execute("INSERT INTO schedules (child_id, schedule_date) VALUES (%s, CURDATE())", (child_id,))
        conn.commit()
        new_id = cursor.lastrowid
        schedules = [{'id': new_id, 'child_id': child_id, 'schedule_date': str(datetime.date.today())}]
    else:
        for s in schedules:
            s['schedule_date'] = str(s['schedule_date'])

    cursor.close()
    conn.close()
    return jsonify(schedules), 200

@app.route('/api/schedules', methods=['POST'])
@token_required
def create_schedule(current_user_id):
    data = request.get_json() or {}
    child_id = data.get('child_id')
    schedule_date = data.get('date') or str(datetime.date.today())
    if not child_id:
        return jsonify({'error': 'child_id is required'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO schedules (child_id, schedule_date) VALUES (%s, %s)", (child_id, schedule_date))
    conn.commit()
    sched_id = cursor.lastrowid
    cursor.close()
    conn.close()
    return jsonify({'message': 'Schedule created', 'id': sched_id}), 201

@app.route('/api/schedules/<int:schedule_id>', methods=['PUT'])
@token_required
def update_schedule(current_user_id, schedule_id):
    data = request.get_json() or {}
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("UPDATE schedules SET schedule_date = %s WHERE id = %s", (data.get('date'), schedule_id))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Schedule updated'}), 200

@app.route('/api/schedules/<int:schedule_id>', methods=['DELETE'])
@token_required
def delete_schedule(current_user_id, schedule_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM schedules WHERE id = %s", (schedule_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Schedule deleted'}), 200

# ==========================================
# PART 8: TASKS CRUD API
# ==========================================

@app.route('/api/tasks/<int:schedule_id>', methods=['GET'])
@token_required
def get_tasks(current_user_id, schedule_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM tasks WHERE schedule_id = %s ORDER BY task_time ASC, id ASC", (schedule_id,))
    tasks = cursor.fetchall()
    for t in tasks:
        raw_time = str(t['task_time'])
        parts = raw_time.split(':')
        t['task_time'] = f"{int(parts[0]):02d}:{int(parts[1]):02d}"
        t['reminder'] = bool(t['reminder'])
    cursor.close()
    conn.close()
    return jsonify(tasks), 200

@app.route('/api/tasks', methods=['POST'])
@token_required
def create_task(current_user_id):
    data = request.get_json() or {}
    if not data.get('schedule_id') or not data.get('name'):
        return jsonify({'error': 'schedule_id and task name are required'}), 400

    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO tasks (schedule_id, name, category, icon, task_time, duration, reminder, status)
        VALUES (%s, %s, %s, %s, %s, %s, %s, %s)
    """, (
        data['schedule_id'],
        data['name'],
        data.get('category', 'hygiene'),
        data.get('icon', 'fa-star'),
        data.get('time', '08:00'),
        int(data.get('duration', 15)),
        bool(data.get('reminder', True)),
        data.get('status', 'pending')
    ))
    conn.commit()
    task_id = cursor.lastrowid
    cursor.close()
    conn.close()
    return jsonify({'message': 'Task added', 'id': task_id}), 201

@app.route('/api/tasks/<int:task_id>', methods=['PUT'])
@token_required
def update_task(current_user_id, task_id):
    data = request.get_json() or {}
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""
        UPDATE tasks SET name=%s, category=%s, icon=%s, task_time=%s, duration=%s, reminder=%s
        WHERE id=%s
    """, (
        data.get('name'),
        data.get('category', 'hygiene'),
        data.get('icon', 'fa-star'),
        data.get('time', '08:00'),
        int(data.get('duration', 15)),
        bool(data.get('reminder', True)),
        task_id
    ))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Task updated'}), 200

@app.route('/api/tasks/<int:task_id>', methods=['DELETE'])
@token_required
def delete_task(current_user_id, task_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM tasks WHERE id = %s", (task_id,))
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Task deleted'}), 200

@app.route('/api/tasks/<int:task_id>/complete', methods=['PATCH'])
@token_required
def toggle_complete_task(current_user_id, task_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT status FROM tasks WHERE id = %s", (task_id,))
    task = cursor.fetchone()
    if not task:
        cursor.close()
        conn.close()
        return jsonify({'error': 'Task not found'}), 404

    new_status = 'completed' if task['status'] == 'pending' else 'pending'
    completed_at = datetime.datetime.now() if new_status == 'completed' else None

    cursor.execute(
        "UPDATE tasks SET status = %s, completed_at = %s WHERE id = %s",
        (new_status, completed_at, task_id)
    )
    conn.commit()
    cursor.close()
    conn.close()
    return jsonify({'message': 'Task status updated', 'status': new_status}), 200

# ==========================================
# DASHBOARD & PROGRESS SUMMARY ENDPOINT
# ==========================================

@app.route('/api/stats', methods=['GET'])
@token_required
def get_stats(current_user_id):
    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT COUNT(*) AS count FROM children WHERE user_id = %s", (current_user_id,))
    total_children = cursor.fetchone()['count']

    cursor.execute("""
        SELECT 
            COUNT(*) AS total_tasks,
            SUM(CASE WHEN t.status = 'completed' THEN 1 ELSE 0 END) AS completed_tasks,
            SUM(CASE WHEN t.status = 'pending' THEN 1 ELSE 0 END) AS pending_tasks
        FROM tasks t
        JOIN schedules s ON t.schedule_id = s.id
        JOIN children c ON s.child_id = c.id
        WHERE c.user_id = %s
    """, (current_user_id,))
    totals = cursor.fetchone()

    cursor.execute("""
        SELECT t.name,
            SUM(CASE WHEN t.status = 'completed' THEN 1 ELSE 0 END) AS completed_count,
            COUNT(*) AS total_count
        FROM tasks t
        JOIN schedules s ON t.schedule_id = s.id
        JOIN children c ON s.child_id = c.id
        WHERE c.user_id = %s
        GROUP BY t.name
        ORDER BY completed_count DESC
    """, (current_user_id,))
    task_breakdown = cursor.fetchall()

    cursor.close()
    conn.close()

    return jsonify({
        'total_children': total_children,
        'total_tasks': int(totals['total_tasks'] or 0),
        'completed_today': int(totals['completed_tasks'] or 0),
        'upcoming_routines': int(totals['pending_tasks'] or 0),
        'task_breakdown': task_breakdown
    }), 200

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)