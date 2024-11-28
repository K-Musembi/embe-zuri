#!/usr/bin/python3
""" main routes / views """

from flask import render_template, jsonify, request, redirect, url_for, abort, g
from app.v1.views import app_views
from app.v1.prediction import Prediction
from app.v1.prediction_lite import Prediction_Lite
from PIL import Image
import io

pd = Prediction()
# pd = Prediction_Lite()


@app_views.route("/", strict_slashes=False)
def index():
    """ home page route"""
    return render_template("index.html")


@app_views.route("/about", strict_slashes=False)
def about():
    """ about embe-zuri """
    return render_template("about.html")


@app_views.route("/contact_us", strict_slashes=False)
def contact_us():
    """ contact information """
    return render_template("contact_us.html")


@app_views.route("/message", methods=['POST'], strict_slashes=False)
def message():
    """ handle user message """
    name = request.form.get("name")
    email = request.form.get("email")
    message = request.form.get("message")

    # send name, email and message to personal email

    return render_template("message_recieved.html")


@app_views.route("/upload", methods=['POST'], strict_slashes=False)
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
        prediction = pd.predict(preprocessed_image)

        return render_template("results.html", prediction=prediction)
        # return render_template("successful_upload.html")
    
    return redirect(url_for("app_views.index"))


@app_views.route("/admin", strict_slashes=False)
def admin():
    """ update app models """
    # create admin.html form
    # restrict route access
    
    return render_template("admin.html")


@app_views.route("/model_update", methods=['POST'], strict_slashes=False)
def model_update():
    """ create and update models """

    # handle form input and update models
