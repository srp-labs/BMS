from django.conf.urls import url
from django.urls import path, include
from utility.views import*

urlpatterns = [

	
    url(r'^api/registration/$',RegistrationListView.as_view(),name='view-all'),

]