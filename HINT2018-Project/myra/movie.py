import requests,json

class Movie(object):
	def about(self,text):
		baseurl = "http://omdbapi.com/?apikey=thewdb&t="
		response=(requests.get(baseurl+text)).json()
		print(response)
		result=response['Title']+ '\n'+response['imdbRating']+ '\n'+response['Genre']+ '\n'+response['Year']
		print(result)
		return result
		
