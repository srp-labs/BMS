from django.db import models

# Create your models here.

# Create your models here.

class Difficulty(models.Model):

	# DATABASE FIELDS
	
	difficulty_id = models.CharField(max_length=10,primary_key=True)
	name = models.CharField(max_length=200)

	# META CLASS
	class Meta:
		verbose_name = 'Difficulty'
		verbose_name_plural = 'Difficulties'

	# TO STRING METHOD
	def __str__(self):
		
		return str(self.name)


	def save(self, *args, **kwargs):
		#do_something
		super().save(*args, **kwargs)  # Call the "real" save() method.
		#do_something
