from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from math import ceil
from django.http import JsonResponse
# from django.shortcuts import get_object_or_404
# from django.core import serializers
# from .models import Category, Product


# Create your views here.
products = [
    {
        'name': f"Product {id}",
        'price': 100 * id,
        'description': f"This is description of product {id}",
        'count': id,
        'is_active': True,
        'id': id,
        'catId': int(ceil(id/4))
    }
    for id in range(1, 21)
]

categories = [
    {
        'name': f"Category {id}",
        'id': id,
    }
    for id in range(1, 6)
]

def pdcts(request):
    return JsonResponse(products, safe=False)

def pd_id(request, pdId):
    for product in products:
        if product['id'] == pdId:
            return JsonResponse(product)
    return JsonResponse({'Error': 'Product not found'})

def catgs(request):
    return JsonResponse(categories, safe=False)

def cat_id(request, catId):
    for categorie in categories:
        if categorie['id'] == catId:
            return JsonResponse(categorie)
    return JsonResponse({'Error': 'Category not found'})

def cat_id_pd(request, catId):
    matching_products = []
    for categorie in categories:
        if categorie['id'] == catId:
            for product in products:
                if product['catId'] == catId:
                    matching_products.append(product)
            if matching_products:
                return JsonResponse(matching_products, safe=False)
            else:
                return JsonResponse({'Error': 'Product of this category not found'})
    return JsonResponse({'Error': 'Category not found'})
