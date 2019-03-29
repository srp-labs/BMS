from django.conf.urls import url
from django.urls import path, include
from utility.views import*

urlpatterns = [

	
    url(r'^api/genders/$',GenderListView.as_view(),name='view-all'),
    url(r'^api/regions/$',RegionListView.as_view(),name='view-all'),

]