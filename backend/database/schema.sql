CREATE DATABASE IF NOT EXISTS visual_schedule_db;
USE visual_schedule_db;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(120) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('Caregiver', 'Occupational Therapist', 'SPED Teacher') NOT NULL DEFAULT 'Caregiver',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Children Table
CREATE TABLE IF NOT EXISTS children (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    age INT NOT NULL,
    gender ENUM('Male', 'Female') NOT NULL DEFAULT 'Male',
    delay_domain VARCHAR(100) NOT NULL,
    notes TEXT,
    photo_url VARCHAR(255) DEFAULT '',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 3. Schedules Table
CREATE TABLE IF NOT EXISTS schedules (
    id INT AUTO_INCREMENT PRIMARY KEY,
    child_id INT NOT NULL,
    schedule_date DATE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (child_id) REFERENCES children(id) ON DELETE CASCADE
);

-- 4. Tasks Table
CREATE TABLE IF NOT EXISTS tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    schedule_id INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) DEFAULT 'hygiene',
    icon VARCHAR(50) DEFAULT 'fa-star',
    task_time TIME NOT NULL,
    duration INT NOT NULL DEFAULT 15,
    reminder BOOLEAN DEFAULT TRUE,
    status ENUM('pending', 'completed') DEFAULT 'pending',
    completed_at TIMESTAMP NULL,
    FOREIGN KEY (schedule_id) REFERENCES schedules(id) ON DELETE CASCADE
);

-- Seed Demo User (Password is: password123)
INSERT INTO users (id, name, email, password_hash, role) VALUES 
(1, 'Maria Santos', 'caregiver@demo.com', 'scrypt:32768:8:1$demo$demo_plain_fallback', 'Caregiver');

-- Seed 3 Sample Children (Requirement from Part 2)
INSERT INTO children (id, user_id, name, age, gender, delay_domain, notes, photo_url) VALUES
(1, 1, 'Lucas Reyes', 6, 'Male', 'Autism Spectrum Disorder (ASD)', 'Responds well to visual timers and green checkmarks.', ''),
(2, 1, 'Sofia Cruz', 5, 'Female', 'Speech & Language Delay', 'Needs audio cues turned on for morning routines.', ''),
(3, 1, 'Noah Bautista', 7, 'Male', 'Fine Motor Delay', 'Requires extra time for dressing and brushing teeth.', '');

-- Seed Today's Schedules for All 3 Children
INSERT INTO schedules (id, child_id, schedule_date) VALUES
(1, 1, CURDATE()),
(2, 2, CURDATE()),
(3, 3, CURDATE());

-- Seed Sample Tasks for Lucas (Schedule 1), Sofia (Schedule 2), and Noah (Schedule 3)
INSERT INTO tasks (schedule_id, name, category, icon, task_time, duration, reminder, status, completed_at) VALUES
(1, 'Brushing Teeth', 'hygiene', 'fa-tooth', '07:30:00', 10, 1, 'completed', NOW()),
(1, 'Eating Breakfast', 'food', 'fa-utensils', '08:00:00', 25, 1, 'completed', NOW()),
(1, 'Dressing Up', 'hygiene', 'fa-shirt', '08:30:00', 15, 1, 'pending', NULL),
(1, 'School Reading Time', 'school', 'fa-book-open', '09:00:00', 30, 1, 'pending', NULL),
(1, 'Play with Blocks', 'play', 'fa-shapes', '10:00:00', 20, 0, 'pending', NULL),
(2, 'Washing Hands', 'hygiene', 'fa-hands-bubbles', '08:00:00', 5, 1, 'completed', NOW()),
(2, 'Eating Meal', 'food', 'fa-utensils', '08:30:00', 25, 1, 'pending', NULL),
(2, 'School Reading', 'school', 'fa-book-open', '09:30:00', 30, 1, 'pending', NULL),
(3, 'Brushing Teeth', 'hygiene', 'fa-tooth', '07:45:00', 10, 1, 'completed', NOW()),
(3, 'Dressing Up', 'hygiene', 'fa-shirt', '08:15:00', 15, 1, 'completed', NOW()),
(3, 'Play with Blocks', 'play', 'fa-shapes', '09:00:00', 20, 0, 'completed', NOW());
