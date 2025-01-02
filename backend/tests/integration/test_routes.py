#!/usr/bin/python3
"""integrations test module"""

import pytest


def test_signup(client):
    """test signup route"""
    response = client.post("/signup", json={
        "username": "test_user2", "email": "test_user2@gmail.com", "password": "test_pw2"
        })
    
    assert response.status_code == 200
    assert response.json == {"message": "Successful sign up!"}

def test_login(client):
    """test login route"""
    response = client.post("/login", json={
        "username": "musembi", "password": "password"
    })

    assert response.status_code == 200
    assert response.json == {"message": "Successful login!"}

def test_logout(client):
    """test logout route"""
    response = client.get("/logout")

    assert response.status_code == 200

def test_upload(client):
    """test upload route"""
    response = client.post("/upload", json={
        "image": "app/v2/static/anthracnose.jpg"
    })

    assert response.status_code == 400

def test_information(client):
    """test information route"""
    response = client.post("/information", json={
        "prediction": "Healthy"
    })

    assert response.status_code == 200
    assert response.json.get("name") == "Healthy"
