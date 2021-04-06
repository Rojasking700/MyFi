import os
basedir = os.path.abspath(os.path.dirname(__file__))

class Config():
    FLASK_APP = os.environ.get('FLASK_APP')
    FLASK_ENV = os.environ.get('FLASK_ENV')
    SERCRET_KEY = os.environ.get('SECRET_KEY') or 'Silly rabit! Tricks are for kids!'
    SQLALCHEMY_DATABASE_USER = os.environ.get('DATABASE_URL') or 'sqlite:///' + os.path.join(basedir, 'app.db') 
    SQLALCHEMY_TRACK_MODIFIACTIONS = False

