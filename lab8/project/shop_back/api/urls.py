from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('products/', views.pdcts),
    path('products/<int:pdId>/', views.pd_id),

    path('categories/', views.catgs),
    path('categories/<int:catId>/', views.cat_id),
    path('categories/<int:catId>/products/', views.cat_id_pd),
]