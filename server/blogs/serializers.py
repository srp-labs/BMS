from rest_framework.serializers import ModelSerializer,PrimaryKeyRelatedField
from blogs.models import*
from utility.serializers import*
from rest_framework import*

class BlogPostSerializer(ModelSerializer):

	difficulty = DifficultySerializer(read_only=True)
	class Meta:
		model = BlogPost
		fields = "__all__"