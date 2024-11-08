#!/usr/bin/python3
"""model module"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from .mango_diagnosis import MangoDiagnosis
from .user import User
from .user_query import UserQuery
