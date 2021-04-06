from . import bp as info
from flask import current_app as app, jsonify, request
# from app.models import Post
from app.wrappers import AlphaVantageAPI


@info.route('/search', methods=['GET','POST'])
def search():
    data = request.json
    
    if request.method == 'POST':
        keyword = data['keyword']
        api = AlphaVantageAPI()
        searchEndpoint = api.getSearchEndpoint(keyword)
        if type(searchEndpoint) == list:
            return jsonify([se.to_dict() for se in searchEndpoint])
        else:
            return jsonify('not available')
    
    else:
        return jsonify("not working")


