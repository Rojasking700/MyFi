from flask import Flask, render_template
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate 
from flask_login import LoginManager

db = SQLAlchemy() 
migrate = Migrate()
login = LoginManager()

def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(config_class)

    db.init_app(app)
    migrate.init_app(app,db)
    login.init_app(app)

    login.login_view = 'login'
    login.login_message = 'You can not be here!'
    login.login_message_category = 'danger'

    with app.app_context():
        from app.blueprints.info import bp as info
        app.register_blueprint(info)

        from . import routes, tokens
    return app