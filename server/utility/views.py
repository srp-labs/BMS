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
from utility.authenticate import*
import random
from django.shortcuts import render
from django.core.mail import EmailMessage
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
import json
from time import gmtime, strftime
import jwt


class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
    	try:
    		serializer = self.serializer_class(data=request.data,context={'request': request })
    		serializer.is_valid(raise_exception=True)

    		user = serializer.validated_data['user']
    		ip = get_client_ip(request)
    		jwt_token = jwt.encode({ 'username': user.username,'ip': ip },SECRET_KEY,algorithm = 'HS256').decode('utf-8')
    		last_login = strftime("%d-%m-%Y %H:%M:%S", gmtime())

    		group = Group.objects.get(user=user)
    		return JsonResponse({ 'status': 'SUCCESS', 'token': jwt_token, 'group': group.name, 'ip':ip, 'session_id': 'JAN-19', 'last_login':last_login })

    	except Exception as e:
    		print(str(e))
    		return Response({ 'status': 'LOGIN_FAILED' })

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



def username_available(request):

	username = request.GET['username']
	user = User.objects.filter(username=username)

	if user.exists():
		return JsonResponse({'status': 'ALREADY EXISTS'})

	else:
		return JsonResponse({'status': 'SUCCESS'})



def send_code(request):

	code = random.randint(1000,10000)

	email = request.GET['email']

	msg = 'Your Verification Code for React DJ is ' + '\'' + str(code) + '\'' + '. Please use this verification code for registration.\n\n' + 'NOTE: This is a system generated e-mail and please do not reply.\n\n' + 'Regards, \n' + 'Team React DJ'
	
	email_msg = EmailMessage('React DJ : Verification Code',msg,to=[email])

	try :
		email_msg.send()
		print("SUCCESS")
		email_code = EmailVerification.objects.create(email=email,code=code)
		return JsonResponse({'status': 'SUCCESS'})

	except Exception as e:
		print(e)
		return JsonResponse({'status': 'REQUEST FAILURE'})


@csrf_exempt
def verify_code(request):

	data = json.loads(request.body.decode())
	print(data)

	email = data['email']
	code = data['code']

	verification = EmailVerification.objects.filter(email=email,code=code)

	if verification.exists() :
		return JsonResponse({'status': 'SUCCESS'})

	else:
		return JsonResponse({'status': 'VERIFICATION FAILURE'})