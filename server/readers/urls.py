from django.conf.urls import url
from django.urls import path, include
from readers.views import*

urlpatterns = [

	
    url(r'^api/registration/$',RegistrationListView.as_view(),name='view-all'),
    url(r'^api/mark_read/$',MarkReadListView.as_view(),name='view-all'),

]