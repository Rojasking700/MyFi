from . import bp as info
from flask import current_app as app, jsonify, request
# from app.models import Post
from app.wrappers import AlphaVantageAPI


@info.route('/search/<string:sym>', methods=['GET','POST'])
def search(sym):
    data = request.json
    api = AlphaVantageAPI()
    searchEndpoint = api.getSearchEndpoint(sym)
    if (searchEndpoint):
        return jsonify([se.to_dict() for se in searchEndpoint])
    else:
        return jsonify('not available')



@info.route('/globalqoute/<string:sym>', methods=['GET','POST'])
def globalqoute(sym):
    api = AlphaVantageAPI()
    quoteEndpoint = api.getQouteEndpoint(sym)
    if (quoteEndpoint):
        return jsonify(quoteEndpoint.to_dict())
    else:
        return jsonify("not working")


@info.route('/timeseries/<string:time>/<string:sym>', methods=['GET', 'POST'])
def timeseries(time,sym):
    api = AlphaVantageAPI()
    timeseries = api.getStockTimeSeriesAdj(time,sym)
    if (timeseries):
        return jsonify([t.to_dict() for t in timeseries])
    else: 
        return jsonify("not working")