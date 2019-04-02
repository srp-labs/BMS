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
from readers.models import *
from readers.serializers import *
from blogs.models import *
from server.settings import SECRET_KEY
from time import gmtime, strftime
import jwt
import json

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
		data = json.loads(request.body.decode())
		print(data)
		try :
			user = User.objects.create_user(username=data['username'],password=data['password'])
			group = Group.objects.get(name='READER')
			user.groups.add(group)
			gender = Gender.objects.get(**data['gender'])
			region = Region.objects.get(**data['region'])
			reader = Reader.objects.create(full_name=data['name'],gender=gender,region=region,user=user,email=data['email'])
			return Response({'status':API_STATUS})

		except Exception as e :
			print(e)
			API_STATUS = 'REQUEST FAILURE'
			return Response({'status':API_STATUS})



class MarkReadListView(APIView):

	def get(self,request):

		access_group = ['ADMIN']
		API_STATUS = "SUCCESS"

		try :

			if API_STATUS == 'SUCCESS' :
				
				filters = {}

				username = request.GET.get('username')
				if username:
					user = User.objects.get(username=username)
					filters['reader'] = Reader.objects.get(user=user)
				
				reads = MarkAsRead.objects.filter(**filters)
				serializer = MarkAsReadSerializer(reads,many=True)
				return Response({'status': API_STATUS, 'list': serializer.data})

			else :
				return Response({'status': API_STATUS})


		except Exception as e:
			print(e)
			API_STATUS = 'REQUEST FAILURE'
			return Response({'status': API_STATUS})


	def post(self,request):

		API_STATUS = "SUCCESS"
		data = json.loads(request.body.decode())
		print(data)
		try :
			user = User.objects.get(username=data['username'])
			reader = Reader.objects.get(user=user)
			blog = BlogPost.objects.get(url=data['blog']['url'])
			rating = data['rating']
			read = MarkAsRead.objects.create(reader=reader,blog=blog,rating=rating)
			return Response({'status':API_STATUS})

		except Exception as e :
			print(e)
			API_STATUS = 'REQUEST FAILURE'
			return Response({'status':API_STATUS})


class ReaderDetailView(APIView):

	def get(self,request):

		access_group = ['READER']
		API_STATUS = "SUCCESS"

		try :

			if API_STATUS == 'SUCCESS' :
				
				filters = {}

				username = request.GET.get('username')
				if username:
					filters['user'] = User.objects.get(username=username)
				
				reader = Reader.objects.get(**filters)
				serializer = ReaderSerializer(reader)
				return Response({'status': API_STATUS, 'detail': serializer.data})

			else :
				return Response({'status': API_STATUS})


		except Exception as e:

			API_STATUS = 'REQUEST FAILURE'
			return Response({'status': API_STATUS})


class ProgressView(APIView):

	def get(self,request):

		access_group = ['READER']
		API_STATUS = "SUCCESS"

		try :

			if API_STATUS == 'SUCCESS' :
				
				filters = {}

				email = request.GET.get('email')
				if email:
					reader = Reader.objects.get(email=email)

				return JsonResponse({'status': API_STATUS, 'progress': '48'})

			else :
				return JsonResponse({'status': API_STATUS})


		except Exception as e:

			API_STATUS = 'REQUEST FAILURE'
			return Response({'status': API_STATUS})