import requests,json

class Currency(object):
	def currency(self,x,y):
		baseurl = "http://data.fixer.io/api/latest?access_key=32eefea965a5c407200dbea289d1e772&symbols="+y+","+x
		response=requests.get(baseurl).json()

		xrate = float(response["rates"][x])
		yrate = float(response["rates"][y])

		conv = xrate/yrate

		message = "1 "+ str(y) +" -> "+ str(conv) +" "+ str(x)
		print(message)
		return message
		