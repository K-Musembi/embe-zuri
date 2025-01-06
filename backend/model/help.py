#!/usr/bin/python3
"""help function module"""

from .base_model import BaseModel
from . import db
from typing import Dict, Any


class Help(BaseModel):
    """help function class"""
    __tablename__ = "help"

    title  = db.Column(db.String(50), nullable=False)
    assistance = db.Column(db.String(50), nullable=True)
    general_description = db.Column(db.JSON, nullable=True)
    navigation = db.Column(db.JSON, nullable=True)
    access = db.Column(db.JSON, nullable=True)
    uploading = db.Column(db.JSON, nullable=True)
    results = db.Column(db.JSON, nullable=True)
    information = db.Column(db.JSON, nullable=True)
    chat = db.Column(db.JSON, nullable=True)

    def __init__(self, **kwargs: Dict[str, Any]):
        """create help instance"""

        super().__init__()

        if "title" not in kwargs:
            raise ValueError("title attribute required")

        self.title = kwargs.get("title")
        self.assistance = kwargs.get("assistance", "")
        self.general_description = kwargs.get("general_description", {})
        self.navigation = kwargs.get("navigation", {})
        self.access = kwargs.get("access", {})
        self.uploading = kwargs.get("uploading", {})
        self.results = kwargs.get("results", {})
        self.information = kwargs.get("information", {})
        self.chat = kwargs.get("chat", {})

    def __str__(self):
        """help instance string representation"""

        return """help function object"""
