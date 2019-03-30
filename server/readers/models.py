from django.db import models
from django.contrib.auth.models import User
from utility.models import *
from blogs.models import *

# Create your models here.


class Reader(models.Model):

	# DATABASE FIELDS
	user = models.OneToOneField(User, on_delete=models.CASCADE,blank=True)
	full_name = models.CharField(max_length=300)
	email = models.EmailField(max_length=70,blank=True,unique=True)
	region = models.ForeignKey(Region,on_delete=models.CASCADE,blank=True,null=True)
	gender = models.ForeignKey(Gender,on_delete=models.CASCADE)
	active = models.BooleanField(default = True)
	photograph = models.ImageField(upload_to = 'media/images/readers/photographs',null=True)

	# META CLASS
	class Meta:
		verbose_name = 'Reader'
		verbose_name_plural = 'Readers'

	# TO STRING METHOD
	def __str__(self):
		return (self.full_name) + "-" + str(self.region)

	# SAVE METHOD
	def save(self, *args, **kwargs):
		#do_something
		super().save(*args, **kwargs)  # Call the "real" save() method.
		#do_something


class MarkAsRead(models.Model):

	# DATABASE FIELDS
	blog = models.ForeignKey(BlogPost,on_delete=models.CASCADE,blank=True,null=True)
	reader = models.ForeignKey(Reader,on_delete=models.CASCADE,blank=True,null=True)
	read = models.BooleanField(default = True)
	rating = models.IntegerField()
	date = models.DateTimeField(auto_now=True)

	# META CLASS
	class Meta:
		verbose_name = 'Mark as Reads'
		verbose_name_plural = 'Mark As Reads'

	# TO STRING METHOD
	def __str__(self):
		return str(self.blog) + "-" + str(self.reader)

	# SAVE METHOD
	def save(self, *args, **kwargs):
		#do_something
		super().save(*args, **kwargs)  # Call the "real" save() method.
		#do_something