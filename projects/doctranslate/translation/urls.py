from django.contrib import admin
from django.urls import path
from django.views.decorators.csrf import csrf_exempt  
from .views import languages,translate,read


urlpatterns = [
    path('languages/',languages ),
    path('translate/',translate),
    path('read/', read)
    
]