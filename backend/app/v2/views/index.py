#!/usr/bin/python3
""" main routes / views """

from flask import jsonify, request, session
from . import v2_app_views
from app.v2.prediction import Prediction
from app.v2.prediction_lite import Prediction_Lite
from werkzeug.security import generate_password_hash, check_password_hash
from model import User, MangoDiagnosis, UserQuery
from PIL import Image
import io

# pd = Prediction()
pd = Prediction_Lite()


@v2_app_views.route("/signup", methods=['POST'], strict_slashes=False)
def signup():
    """ signup new user """
    username = request.json.get("username")
    email = request.json.get("email")
    password = request.json.get("password")

    # return first result, or None
    user = User.query.filter_by(email=email).first()
    if user:
        return jsonify({"error": "email already registered!"}), 400
    
    password = generate_password_hash(password)
    
    new_user = User(username=username, email=email, password=password)
    
    new_user.add_to_db()

    session["user_id"] = new_user.id
    return jsonify({"message": "Successful sign up!"}), 200


@v2_app_views.route("/login", methods=['POST'], strict_slashes=False)
def login():
    """log in users"""
    if "user_id" in session:
        return jsonify({"message": "already logged in!"}), 200
    
    username = request.json.get("username")
    password = request.json.get("password")

    user = User.query.filter_by(username=username).first()
    if user and check_password_hash(user.password, password):
        session["user_id"] = user.id
        
        return jsonify({"message": "Successful login!"}), 200
    
    return jsonify({"error": "invalid credentials"}), 400


@v2_app_views.route("/logout", methods=['POST'], strict_slashes=False)
def logout():
    """log out users"""
    session.clear()
    return jsonify({"message": "successful log out!"}), 200


@v2_app_views.route("/upload", methods=['POST'], strict_slashes=False)
def upload():
    """ handle image upload """
    image = request.files.get("image")
    
    if image:
        if isinstance(pd, Prediction):
            # tf.keras.pr...image.load_img() excpects a path or io.BytesIO obj
            image = io.BytesIO(image.read())
            image = pd.img_to_tensor(image)
        elif isinstance(pd, Prediction_Lite):
            image = Image.open(image)

        preprocessed_image = pd.preprocessing(image)
        result = pd.predict(preprocessed_image)

        name = result["prediction"]
        diagnosis = MangoDiagnosis.query.filter_by(name=name).first()
        # result.append({"remedies": diagnosis.remedies})

        if "user_id" in session:
            query = UserQuery({
                "user_id": session["user_id"],
                "mango_diagnosis_id": diagnosis.id
            })

            query.add_to_db()

        return jsonify(result), 200
    
    return jsonify({"error": "image not uploaded"}), 400


@v2_app_views.route("/admin", strict_slashes=False)
def admin():
    """ update app models """
    # create admin.html form
    # restrict route access
    pass


@v2_app_views.route("/model_update", methods=['POST'], strict_slashes=False)
def model_update():
    """ create and update models """
    # handle form input and update models
    pass