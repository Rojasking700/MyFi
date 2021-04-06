from flask import current_app as app, jsonify, request
# from app.models import Post
from app.wrappers import AlphaVantageAPI

@app.route('/')
@app.route('/index')
def index():
    api = AlphaVantageAPI()
    quoteEndpoint = api.getQouteEndpoint('IBM')
    return jsonify(quoteEndpoint.to_dict())
    
# @app.route('/search')
# def search():
#     api = AlphaVantageAPI()
#     searchEndpoint = api.getSearchEndpoint('SAIC')
#     if type(searchEndpoint) == list:
#         return jsonify([se.to_dict() for se in searchEndpoint])
#     else:
#         return jsonify('not available')


