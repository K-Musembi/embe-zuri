#!/usr/bin/python3
"""user query module"""

from . import db
from .base_model import BaseModel
from typing import Dict


class UserQuery(BaseModel):
    """record user queries"""
    __tablename__ = "user_query"

    user_id = db.Column(db.String(50), db.ForeignKey("user.id"), nullable=False)
    mango_diagnosis_id = db.Column(
        db.String(50), db.ForeignKey("mango_diagnosis.id"), nullable=False)
    
    # with a user instance, you can access related User Queries using user.queries
    user = db.relationship("User", backref=db.backref("queries", lazy=True))
    mango_diagnosis = db.relationship(
        "MangoDiagnosis", backref=db.backref("queries", lazy=True))
    
    def __init__(self, **kwargs: Dict[str, str]):
        """initialize user query instance"""
        super().__init__()

        self.user_id = kwargs.get("user_id")
        self.mango_diagnosis_id = kwargs.get("mango_diagnosis_id")
    
    def __str__(self):
        """user query string representation"""
        return "User query instance"
