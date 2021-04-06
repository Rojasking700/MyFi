from flask import Blueprint

bp = Blueprint('info',__name__,url_prefix='/info')

from . import routes