#!/usr/bin/python3
"""model module"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

from model.mango_diagnosis import MangoDiagnosis
