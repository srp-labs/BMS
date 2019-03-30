import requests,json

class Holiday(object):
	def holiday(self):
		baseurl = "https://holidayapi.com/v1/holidays?key=e4ada33f-d4a2-4de6-a9a4-00a2826589b5&country=IN&year=2017"
		dates=(requests.get(baseurl).json())["holidays"]

		holiday_date = ""

		for key,value in dates.iteritems():
			print(key,"+",value[0]["name"])
			holiday_date += value[0]["date"]+" - "+value[0]["name"]+"\n"

		
		print(holiday_date)
		return holiday_date
		