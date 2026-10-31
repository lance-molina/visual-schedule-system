# Web-Based Visual Schedule and Task Management System

A responsive, child-friendly web application designed for children with developmental delays, supporting Caregivers, Occupational Therapists, and SPED Teachers.

---

## 1. Local Setup Guide

### Prerequisites
* **XAMPP** (running MySQL / MariaDB on port `3306`)
* **Python 3.10+**

### Step 1: Database Setup
1. Open the XAMPP Control Panel and start **MySQL**.
2. Navigate to `http://localhost/phpmyadmin`.
3. Import or paste the contents of `backend/database/schema.sql` to create `visual_schedule_db` and seed the 3 sample children profiles.

### Step 2: Run the Backend API
```bash
cd backend
pip install -r requirements.txt
python app.py