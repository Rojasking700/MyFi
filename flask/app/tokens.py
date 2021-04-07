from flask import jsonify, current_app as app 
from app import db 
from .auth import basic_auth, token_auth

@app.route('/tokens', methods=['POST'])
@basic_auth.login_required
def get_token():
    token = basic_auth.current_user().get_token()
    db.session.commit()
    return jsonify({ 'token' : token })

@app.route('/checktoken', methods=['POST'])
@token_auth.login_required
def check_token():
    return jsonify({"token": True})