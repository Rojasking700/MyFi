import requests
from datetime import datetime
from config import Config

class AlphaVantageAPI():

    # https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo

    def __init__(self):
        self.base_path = "https://www.alphavantage.co/query?function="
        self.api_key = Config.ALPHA_VANTAGE_API
        self.apikey_URL ='&apikey='
        self.sym_URL = '&symbol='

    def getQouteEndpoint(self,symbol):
        globalQuote = 'GLOBAL_QUOTE'
        url = self.base_path + globalQuote + self.sym_URL + symbol + self.apikey_URL + self.api_key
        response = requests.get(url)
        try:
            data = response.json()['Global Quote']
            symbol = data['01. symbol']
            opens = data['02. open']
            high = data['03. high']
            low = data['04. low']
            price = data['05. price']
            volume = data['06. volume']
            last_trading_day = data['07. latest trading day']
            prev_close = data['08. previous close']
            change = data['09. change']
            change_per = data['10. change percent']

            quoteEndpoint = QuoteEndpoint(symbol,opens,high,low,price,volume,last_trading_day,prev_close,change,change_per)
            return quoteEndpoint
        except KeyError:
            return None

# https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=SAIC&apikey=demo
    def getSearchEndpoint(self,keyWord):
        searchPoints = []
        symbolSearch = 'SYMBOL_SEARCH'
        kword = '&keywords='
        url = self.base_path +  symbolSearch + kword + keyWord + self.apikey_URL + self.api_key
        print(url)
        response = requests.get(url)
        try:
            data = response.json()['bestMatches']
            print('this is the data ',data)
            for i in data:
                print('this one',i)
                symbol = i['1. symbol']
                name = i['2. name']
                types = i['3. type']
                region = i['4. region']
                currency = i['8. currency']
                matchScore = i['9. matchScore']

                serachEndpoint = SearchEndpoint(symbol,name,types,region,currency,matchScore)
                searchPoints.append(serachEndpoint)
            return searchPoints 
        except KeyError:
            return None



class QuoteEndpoint:
    def __init__(self,symbol,opens,high,low,price,volume,last_trading_day,prev_close,change,change_per):
        self.symbol = symbol
        self.open = opens 
        self.high = high
        self.low = low 
        self.price = price 
        self.volume = volume
        self.last_trading_day = last_trading_day
        self.prev_close = prev_close
        self.change = change 
        self.change = change_per

    def __str__(self):
        return f"stonk {self.symbol}"
    def __repr__(self):
        return f"<stonk | {self.symbol}"

    def to_dict(self):
        return{
            'symbol' : self.symbol,
            'opens' : self.open,
            'high' : self.high,
            'low' : self.low,
            'price' : self.price,
            'volume' : self.volume,
            'last_trading_day' : self.last_trading_day,
            'prev_close' : self.prev_close,
            'change' : self.change,
            'change_per' : self.change
        }

class SearchEndpoint():
    
    def __init__(self,symbol,name,types,region,currency,matchScore):
        self.symbol = symbol
        self.name = name 
        self.region = region 
        self.types = types
        self.region = region
        self.currency = currency
        self.matchScore = matchScore

    def __str__(self):
        return f"stonk {self.symbol}"
    def __repr__(self):
        return f"<stonk | {self.symbol}"

    def to_dict(self):
        return {
            'symbol' : self.symbol,
            'name' : self.name,
            'region': self.region,
            'types' : self.types,
            'region' : self.region,
            'currency' : self.currency,
            'matchScore' : self.matchScore
        }