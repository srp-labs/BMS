import pprint
import zulip
import sys
import re
import json
import httplib2
import os

from chatterbot import ChatBot
from translate import Translate
from hackernews import Hackernews
from movie import Movie
from lyrics import Lyrics
from holiday import Holiday
from currency import Currency
from cricket import Cricket



p = pprint.PrettyPrinter()
BOT_MAIL = "myra-bot@myra.zulipchat.com"

class ZulipBot(object):
	def __init__(self):
		self.client = zulip.Client(site="https://reactdj.zulipchat.com/api/")
		self.subscribe_all()
		self.hacknews = Hackernews()
		self.trans = Translate()
		self.movie= Movie()
		self.lyrics = Lyrics()
		self.holiday = Holiday()
		self.currency = Currency()
		self.cricket = Cricket()
						
		print("done init")
		self.subkeys = ["translate", "hackernews", "hn", "hotel", "HN", "askme", "cricnews", "movie", "currency", "holiday", "lyrics"]

	def subscribe_all(self):
		json = self.client.get_streams()["streams"]
		streams = [{"name": stream["name"]} for stream in json]
		self.client.add_subscriptions(streams)

	def process(self, msg):
		content = msg["content"].split()
		sender_email = msg["sender_email"]
		ttype = msg["type"]
		stream_name = msg['display_recipient']
		stream_topic = msg['subject']

		print(content)

		if sender_email == BOT_MAIL:
			return 

		print("Sucessfully heard.")

		if content[0].lower() == "myra" or content[0] == "@**myra**":
			if content[1].lower() == "translate":
				ip = content[2:]
				ip = " ".join(ip)
				message = self.trans.translate(ip)
				self.client.send_message({
					"type": "stream",
					"subject": msg["subject"],
					"to": msg["display_recipient"],
					"content": message
					})
			if content[1].lower() == "movie":
				ip = content[2:]
				ip = " +".join(ip)
				message = self.movie.about(ip)
				self.client.send_message({
					"type": "stream",
					"subject": msg["subject"],
					"to": msg["display_recipient"],
					"content": message
					})
			
			if content[1].lower() == "lyrics":
				author = content[2]
				title = content[3:]
				title = " ".join(title)
				message = self.lyrics.about(author, title)
				self.client.send_message({
					"type": "stream",
					"subject": msg["subject"],
					"to": msg["display_recipient"],
					"content": message
					})
			if content[1].lower() == 'holiday':
				quote_data = self.holiday.holiday()
				self.client.send_message({
					"type": "stream",
					"to": stream_name,
					"subject": stream_topic,
					"content": quote_data
					})
			
			if content[1].lower() == 'currency':
				x = content[2]
				y = content[3]

				quote_data = self.currency.currency(x,y)
				self.client.send_message({
					"type": "stream",
					"to": stream_name,
					"subject": stream_topic,
					"content": quote_data
					})
			
			if content[1].lower() == "cricnews":
				news = self.cricket.news()
				self.client.send_message({
					"type": "stream",
					"subject": msg["subject"],
					"to": msg["display_recipient"],
					"content": news  
					})
			
			
			if content[1].lower() == 'hackernews' or content[1].lower() == 'hn' or content[1].lower() == 'HN':
				news = self.hacknews.get_hackernews()
				result = self.client.send_message({
					"type": "stream",
					"to": stream_name,
					"subject": stream_topic,
					"content": news
					})
				print(result)

			if content[1] not in self.subkeys:
				ip = content[1:]
				ip = " ".join(ip)
				message = self.chatbot.get_response(ip).text
				self.client.send_message({
					"type": "stream",
					"subject": msg["subject"],
					"to": msg["display_recipient"],
					"content": message
					})

		
		elif "myra" in content and content[0] != "myra":
			self.client.send_message({
				"type": "stream",
				"subject": msg["subject"],
				"to": msg["display_recipient"],
				"content": "Hey there! :blush:"
				})
		else:
			return

def main():
	bot = ZulipBot()
	bot.client.call_on_each_message(bot.process)

if __name__ == "__main__":
	try:
		main()
	except KeyboardInterrupt:
		print("Thanks for using Myra Bot. Bye!")
		sys.exit(0)
