#!/usr/bin/python3
"""user module"""

from . import db
from .base_model import BaseModel
from typing import Dict


class User(BaseModel):
    """user class"""
    __tablename__ = "user"

    username = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    password = db.Column(db.String(128), nullable=False)
    
    def __init__(self, **kwargs: Dict[str, str]):
        """initialize user instance"""
        super().__init__()

        self.username = kwargs.get("username")
        self.email = kwargs.get("email")
        self.password = kwargs.get("password")
    
    def __str__(self):
        """user string representation"""
        return "User instance"
