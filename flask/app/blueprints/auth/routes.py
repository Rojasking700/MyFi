from . import bp as auth
from app import db 
from flask import current_app as app, request, url_for, jsonify
from .forms import UserInfoForm, LoginForm
from app.models import User
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import check_password_hash
from app.tokens import get_token


@auth.route('/signup', methods=['GET','POST'])
def signup():
    data = request.json
    form = UserInfoForm()
     
    if request.method == 'POST' and data['password'] == data['confirm_password']:
        token = None
        token_expiration = None
        p = User(data['username'], data['email'], data['password'])

        db.session.add(p)
        db.session.commit()
        return jsonify(p.to_dict())

    return jsonify({'message' : "FAIL"})

@auth.route('/login', methods=['GET','POST'])
def login():
    if request.method == 'POST':
        data = request.json
        username = data['username']
        password = data['password']
        # remember_me = data['remeber_me']

        user = User.query.filter_by(username=username).first()

        if user is None or not check_password_hash(user.password, password):
            message = "Email and/or password is not valid. Please try again."
            return jsonify({'message' : message})

        login_user(user)
        print(current_user)
        return jsonify(user.get_token())
        
    return jsonify({'message' : "FAIL"})

@auth.route('/logout')
def logout():
    logout_user()
    message = "You have logged out"
    return jsonify({'message' : message })