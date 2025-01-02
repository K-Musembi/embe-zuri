#!/usr/bin/python3
"""test application models"""
from app.v2.app import app
from app.v2.app import db
from model import User, MangoDiagnosis, MangoInfo


def test_user():
    """test user model"""
    with app.app_context():
        user = User(username="Test", email="test@pytest", password="test")
        user.add_to_db()
        
        assert user.username == "Test"
        assert user.email == "test@pytest"
        assert str(user) == "User instance"

def test_mango_diagnosis():
    """test mango diagnosis model"""
    with app.app_context():
        mango_diagnosis = MangoDiagnosis(name="Test", remedies=["one", "two"])
        mango_diagnosis.add_to_db()

        assert mango_diagnosis.name == "Test"
        assert mango_diagnosis.remedies == ["one", "two"]
        assert str(mango_diagnosis) == "mango diagnosis instance"

def test_mango_info():
    """test mango info model"""
    with app.app_context():
        mango_info = MangoInfo(name="Test", causes=["one", "two"])
        mango_info.add_to_db()

        assert mango_info.name == "Test"
        assert mango_info.causes == ["one", "two"]
        assert str(mango_info) == "mango information instance"
