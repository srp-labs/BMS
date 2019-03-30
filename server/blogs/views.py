# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render


from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth.models import Group,User
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView,RetrieveAPIView
from blogs.models import*
from blogs.serializers import*

class BlogListView(APIView):

	def get(self,request):

		blogs = BlogPost.objects.all().order_by('id')
		serializer = BlogPostSerializer(blogs,many=True)
		return Response({'status': 'SUCCESS', 'list': serializer.data})