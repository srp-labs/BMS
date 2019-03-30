import requests, json

class Lyrics(object):
    def about(self, author, title):
        baseurl = "https://api.lyrics.ovh/v1/"+author+"/"+title
        response = (requests.get(baseurl)).json()
        print(response)
        return response['lyrics']
