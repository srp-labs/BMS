from django.db import models
from utility.models import *

# Create your models here.

class BlogPost(models.Model):

	# DATABASE FIELDS
	url = models.URLField(max_length=250)
	title = models.CharField(max_length=100)
	thumbnail = models.ImageField(upload_to = 'images/blogs',null=True)
	frontend_score = models.IntegerField()
	backend_score = models.IntegerField()
	setup_score = models.IntegerField()
	reactdj_score = models.IntegerField()
	read_time = models.IntegerField(blank=True,null=True)
	difficulty = models.ForeignKey(Difficulty, on_delete=models.CASCADE)
	publish_date = models.DateField()
	noteworthy = models.BooleanField(default = False)


	# META CLASS
	class Meta:
		verbose_name = 'Blog Post'
		verbose_name_plural = 'Blog Posts'

	# TO STRING METHOD
	def __str__(self):

		return str(self.title) + " " + str(self.publish_date) 


	def save(self, *args, **kwargs):
		#do_something
		super().save(*args, **kwargs)  # Call the "real" save() method.
		#do_something