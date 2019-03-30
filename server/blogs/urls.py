from django.conf.urls import url
from django.urls import path, include
from blogs.views import*

urlpatterns = [

	
    url(r'^api/blogs/$',BlogListView.as_view(),name='view-all'),

]