# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import Group,User
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView
from utility.models import*
from utility.serializers import*
from utility.authenticate import*
from utility.session import*
from server.settings import SECRET_KEY
from time import gmtime, strftime
import jwt

class RegistrationListView(APIView):

	def get(self,request):

		access_group = ['ADMIN']
		API_STATUS = "SUCCESS"

		try :

			if API_STATUS == 'SUCCESS' :
				
				
				registrations = Reader.objects.all()
				serializer = ReaderSerializer(registrations,many=True)
				return Response({'status': API_STATUS, 'list': serializer.data})

			else :
				return Response({'status': API_STATUS})


		except Exception as e:
			print(e)
			API_STATUS = 'REQUEST FAILURE'
			return Response({'status': API_STATUS})

	def post(self,request):

		API_STATUS = "SUCCESS"
		data = request.body
		print(data)
		return Response({'status':API_STATUS})