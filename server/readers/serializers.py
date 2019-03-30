from rest_framework.serializers import ModelSerializer,PrimaryKeyRelatedField
from readers.models import*
from utility.serializers import*
from blogs.serializers import*
from rest_framework import*

class ReaderSerializer(ModelSerializer):

	gender = GenderSerializer(read_only=True)
	region = RegionSerializer(read_only=True)

	class Meta:
		model = Reader
		fields = "__all__"

class MarkAsReadSerializer(ModelSerializer):

	blog = BlogPostSerializer(read_only=True)
	reader = ReaderSerializer(read_only=True)

	class Meta:
		model = MarkAsRead
		fields = "__all__"