#!/usr/bin/python3
"""flask app"""

from app.v1.views import app_views
from flask import Flask, jsonify
from flask_cors import CORS
from model import db
import os

user = os.getenv("MYSQL_USER")
pw = os.getenv("MYSQL_PASSWORD")
database = os.getenv("MYSQL_DATABASE")
# uri = os.getenv("SQLALCHEMY_DATABASE_URI")

app = Flask(__name__, template_folder="templates", static_folder="static")
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql://{user}:{pw}@localhost/{database}"
# app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # define methods

db.init_app(app)

with app.app_context():
    from model import MangoDiagnosis
    db.create_all()  # import models before calling method

app.register_blueprint(app_views)

CORS = CORS(app, resources={r"/*": {"origins": "*"}})


@app.errorhandler(404)
def not_found(error):
    """ 404 error handler """
    return jsonify({"error": "not found"}), 404


@app.errorhandler(401)
def not_authorised(error):
    """ 401 error handler """
    return jsonify({"error": "not authorised"}), 401


@app.errorhandler(403)
def not_permitted(error):
    """ 403 error handler """
    return jsonify({"error": "not permitted"}), 403


if __name__ == "__main__":
    """main function"""
    app.run(host="0.0.0.0", port=5000, threaded=True)  # threaded: verbose
