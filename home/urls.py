from django.urls import path, include
from . import views

urlpatterns = [
path('',  views.index, name = 'home'),
path('showpropertiesforsale', views.ShowPropertiesForSale, name='showpropertiesforsale')
]