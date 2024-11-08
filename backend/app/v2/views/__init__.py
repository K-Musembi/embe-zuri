#!/usr/bin/python3
"""create blueprint"""

from flask import Blueprint

v2_app_views = Blueprint("v2_app_views", __name__, url_prefix="")

from .index import *
