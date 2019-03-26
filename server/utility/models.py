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

class Gender(models.Model):

	# DATABASE FIELDS
	gender_id = models.CharField(max_length=20,primary_key=True)
	name = models.CharField(max_length=100)
	
	# META CLASS
	class Meta:
		verbose_name = 'Gender'
		verbose_name_plural = 'Genders'

	# TO STRING METHOD
	def __str__(self):
		return str(self.name)

	# SAVE METHOD
	def save(self, *args, **kwargs):
		#do_something
		super().save(*args, **kwargs)  # Call the "real" save() method.


class Region(models.Model):

	# DATABASE FIELDS
	region_id = models.CharField(max_length=20,primary_key=True)
	name = models.CharField(max_length=100)
	
	# META CLASS
	class Meta:
		verbose_name = 'Region'
		verbose_name_plural = 'Regions'

	# TO STRING METHOD
	def __str__(self):
		return str(self.name)

	# SAVE METHOD
	def save(self, *args, **kwargs):
		#do_something
		super().save(*args, **kwargs)  # Call the "real" save() method.