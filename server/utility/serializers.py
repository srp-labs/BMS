from rest_framework.serializers import ModelSerializer,PrimaryKeyRelatedField
from utility.models import*
from rest_framework import*

class UserSerializer(ModelSerializer):

	class Meta:
		model = User
		fields = "__all__"

class DifficultySerializer(ModelSerializer):

	class Meta:
		model = Difficulty
		fields = "__all__"


class GenderSerializer(ModelSerializer):

	class Meta:
		model = Gender
		fields = "__all__"

class RegionSerializer(ModelSerializer):

	class Meta:
		model = Region
		fields = "__all__"