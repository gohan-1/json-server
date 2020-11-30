
from django.contrib import admin
from django.urls import path
from .views import train_model,scrap,predict,languages,translate
from .views import convert        #Convert file function call


urlpatterns = [

    path('train/', train_model),
    path('scrap/', scrap),
    path('predict/', predict),
    #google translator


    path('languages/',languages ),
    path('translate/',translate),


    #API url for Convert file
    path('convert/', convert)
]
