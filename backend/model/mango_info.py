#!/usr/bin/python3
"""mango disease information"""

from .base_model import BaseModel
from . import db
from typing import Dict, Any


class MangoInfo(BaseModel):
    """mango info class"""
    __tablename__ = "mango_info"

    name = db.Column(db.String(50), nullable=False)
    image = db.Column(db.JSON, nullable=True)
    general_info = db.Column(db.JSON, nullable=True)
    causes = db.Column(db.JSON, nullable=True)
    remedies = db.Column(db.JSON, nullable=True)

    def __init__(self, **kwargs: Dict[str, Any]):
        """create mango info object"""

        super().__init__()

        if "name" not in kwargs:
            raise ValueError("name attribute required")

        self.name = kwargs.get("name")
        self.image = kwargs.get("image", {})
        self.general_info = kwargs.get("general_info", {})
        self.causes = kwargs.get("causes", {})
        self.remedies = kwargs.get("remedies", {})

    def __str__(self):
        """mango info instance string representation"""

        return """mango information instance"""
