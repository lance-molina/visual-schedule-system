# Web-Based Visual Schedule and Task Management System

A responsive, child-friendly web application designed for children with developmental delays, supporting Caregivers, Occupational Therapists, and SPED Teachers.

---

## 1. Local Setup Guide

### Prerequisites
* **XAMPP** (running MySQL / MariaDB on port `3306`)
* **Python 3.10+**

### Step 1: Database Setup
1. Open the XAMPP Control Panel and click **Start** next to **MySQL**.
2. Open your browser and go to `http://localhost/phpmyadmin`.
3. Click the **SQL** tab in the top menu bar (you do not need to select or create a database first).
4. Open `backend/database/schema.sql` in a text editor, copy the entire script, and paste it into the SQL query box in phpMyAdmin.
5. Click **Go** at the bottom-right of the box. This automatically creates the `visual_schedule_db` database, builds the 4 tables, and seeds the demo caregiver account along with the 3 sample children profiles.

### Step 2: Run the Backend API
1. Open a terminal (Command Prompt, PowerShell, or VS Code Terminal) in the root `visual-schedule-system` folder.
2. Navigate to the backend folder, install the Python dependencies, and start the Flask server:
```bash
cd backend
pip install -r requirements.txt
python app.py
```
3. Leave this terminal window open and running. You should see `* Running on http://127.0.0.1:5000`.

### Step 3: Launch the Frontend
1. Open the `frontend/` folder in your file explorer and double-click `index.html` to open it in Google Chrome (or right-click `frontend/index.html` in VS Code and select **Open with Live Server**).
2. Log in using the pre-filled demo credentials:
   * **Demo Email:** `caregiver@demo.com`
   * **Demo Password:** `password123`

---
