#!/usr/bin/python3
"""pytest module"""

import pytest
from app.v2.app import app


@pytest.fixture
def my_app():
    """Flask app for testing"""
    with app.app_context():
        yield app

@pytest.fixture
def client(my_app):
    """Flask test client"""
    return my_app.test_client()   

# test_client() is a method provided by Flask for testing routes.
