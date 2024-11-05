#!/usr/bin/python3
"""base model"""

from model import db
from datetime import datetime
from typing import Dict, Any
import uuid
import json


class BaseModel(db.Model):
    """base model class"""
    __abstract__ = True

    id = db.Column(db.String(36), primary_key=True)
    created_at = db.Column(db.DateTime, nullable=False)
    updated_at = db.Column(db.DateTime, nullable=False)

    def __init__(self):
        """create an instance"""
        self.id = str(uuid.uuid4)()
        self.created_at = datetime.now()
        self.updated_at = datetime.now()

    def add_to_db(self):
        """add instance to database"""
        db.session.add(self)
        db.session.commit()

    def save_to_db(self):
        """save instance to database"""
        db.session.commit()

    def delete_from_db(self):
        """delete instance from database"""
        db.session.delete(self)
        db.session.commit()

    def to_json(self):
        """json format of instance attributes"""
        attributes = {}
        for key, value in self.__dict__:
            if key == "created_at" or key == "updated_at":
                value = value.isoformat()  # convert to ISO format string
            # if key == "id":
            #    value = str(value)

            attributes[key] = value

        return json.dumps(attributes)

    def updated(self, **kwargs: Dict[str, Any]):
        """update instance attributes"""
        for key, value in kwargs.items():
            if key not in self.__dict__:
                raise ValueError("invalid attribute")

            if key == "id" or key == "created_at":
                continue

            self.__dict__[key] = value

        self.updated_at = datetime.now()
        self.save_to_db()

    @classmethod
    def all_objects(cls):
        """retrieve all class instances"""
        return cls.query.all()
