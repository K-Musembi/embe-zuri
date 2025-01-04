#!/usr/bin/python3
"""flask app"""

from .views import v2_app_views
from flask import Flask, jsonify
from flask_cors import CORS
from model import db
from dotenv import load_dotenv
import os

load_dotenv()

user = os.getenv("MYSQL_USER")
pw = os.getenv("MYSQL_PASSWORD")
database = os.getenv("MYSQL_DATABASE")
# uri = os.getenv("SQLALCHEMY_DATABASE_URI")

app = Flask(__name__, template_folder="", static_folder="")
app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql://{user}:{pw}@localhost/{database}"
# app.config["SQLALCHEMY_DATABASE_URI"] = uri
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False  # define methods

app.secret_key = os.urandom(24)

db.init_app(app)

with app.app_context():
    from model import MangoDiagnosis, User, UserQuery, MangoInfo, Help
    db.create_all()  # import models before calling method

app.register_blueprint(v2_app_views)

CORS = CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)


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
    app.run(host="0.0.0.0", port=5000, threaded=True, debug=False)  # threaded: verbose
