from django.contrib.auth.models import Group,User
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from server.settings import SECRET_KEY
import jwt
from .models import *

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return (ip)

def isAuthenticated(request,access_group,api_view):

	try:
		token = request.META['HTTP_AUTHORIZATION']
	except Exception as e:
		print(str(e))
		return 'SESSION EXPIRED'

	ip = get_client_ip(request)
	SECRET = SECRET_KEY
	token = token.encode('utf-8')
	jwt_data = jwt.decode(token, SECRET_KEY, algorithm = 'HS256')
	username = jwt_data['username']
	jwt_ip = jwt_data['ip']
	user = User.objects.get(username=username)

	api_log = ApiLog.objects.create(user=user,api_view=api_view,ip_address=ip,method='GET')

	try:
		group = Group.objects.get(user=user)
		if ip != jwt_ip or group.name not in access_group:
			return 'AUTHORIZATION FAILED'
	except Exception as e:
		print(str(e))
		return 'AUTHORIZATION FAILED'

	return 'SUCCESS'