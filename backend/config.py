import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv('JWT_SECRET', 'eac-cavite-modeling-simulation-secret-2026')
    DB_HOST = os.getenv('DB_HOST', 'localhost')
    DB_USER = os.getenv('DB_USER', 'root')
    DB_PASSWORD = os.getenv('DB_PASSWORD', '')
    DB_NAME = os.getenv('DB_NAME', 'visual_schedule_db')
    PORT = int(os.getenv('PORT', 5000))
    CORS_ORIGIN = os.getenv('CORS_ORIGIN', '*')
