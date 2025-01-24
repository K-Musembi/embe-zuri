#!/usr/bin/python3
"""mango diagnosis model"""

from .base_model import BaseModel
from . import db
from typing import Dict, Any
# import json


class MangoDiagnosis(BaseModel):
    """mango diagnosis model"""
    __tablename__ = "mango_diagnosis"

    name = db.Column(db.String(50), nullable=False)
    remedies = db.Column(db.JSON, nullable=True)

    def __init__(self, **kwargs: Dict[str, Any]):
        """initialize an object"""
        super().__init__()

        if "name" not in kwargs:
            raise ValueError("name attribute required")

        self.name = kwargs.get("name")
        self.remedies = kwargs.get("remedies", {})

        # serialize dictionary to JSON text for database storage,
        # if JSON not supported e.g SQLite.
        # if "remedies" in kwargs:
        # self.remedies = json.dumps(kwargs.get("remedies"))

    def __str__(self):
        """object string representation"""
        return "mango diagnosis instance"
