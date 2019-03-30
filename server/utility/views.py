from __future__ import unicode_literals

from django.shortcuts import render


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import Group,User
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView
from utility.models import*
from utility.serializers import*

class GenderListView(APIView):

	def get(self,request):

		genders = Gender.objects.all()
		serializer = GenderSerializer(genders,many=True)
		return Response({'status': 'SUCCESS', 'list': serializer.data})


class RegionListView(APIView):

	def get(self,request):

		regions = Region.objects.all()
		serializer = RegionSerializer(regions,many=True)
		return Response({'status': 'SUCCESS', 'list': serializer.data})


def send_otp():

	code = '2345'
	email = 'arijit.1790@gmail.com'
	msg = 'Your Verification Code for React DJ is ' + '\'' + str(code) + '\'' + '. Please use this verification code for registration.\n\n' + 'NOTE: This is a system generated e-mail and please do not reply.\n\n' + 'Regards, \n' + 'Team React DJ'
	email_msg = EmailMessage('React DJ: Verification Code',msg,to=[email])
	try :
		email_msg.send()
		print("SUCCESS")

	except Exception as e:
		print(e)
		print("FAILED")


    