from django.shortcuts import render
from django.http.response import JsonResponse, HttpResponse
from math import ceil
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from .models import Vacancy, Company

# Create your views here.
# vacancies = [
#     {
#         'id': id,
#         'name': f"Vacancy {id}",
#         'description': f"This is description of Vacancy {id}",
#         'salary': 1000.0 * id,
#         'compId': int(ceil(id/4)), #200IQ move
#         'company': f"This is Vacancy of Company #{int(ceil(id/4))}"
#     }
#     for id in range(1, 21)
# ]

# companies = [
#     {
#         'name': f"Company {id}",
#         'description': f"This is description of Company {id}",
#         'id': id,
#     }
#     for id in range(1, 6)
# ]

# def vacs(request):
#     return JsonResponse(vacancies, safe=False)

# def vacs_id(request, id):
#     for Vacancy in vacancies:
#         if Vacancy  ['id'] == id:
#             return JsonResponse(Vacancy)
#     return JsonResponse({'Error': 'Vacancy not found'})

# def cmps(request):
#     return JsonResponse(companies, safe=False)

# def cmps_id(request, compId):
#     for company in companies:
#         if company['id'] == compId:
#             return JsonResponse(company)
#     return JsonResponse({'Error': 'Company not found'})

# def cmps_id_vacs(request, compId):
#     matching_vacancies = []
#     for company in companies:
#         if company['id'] == compId:
#             for Vacancy in vacancies:
#                 if Vacancy['compId'] == compId:
#                     matching_vacancies.append(Vacancy)
#             if matching_vacancies:
#                 return JsonResponse(matching_vacancies, safe=False)
#             else:
#                 return JsonResponse({'Error': 'Vacancy of this Company not found'})
#     return JsonResponse({'Error': 'Company not found'})

# def vacs_tt(request):
#     top_vacancies = sorted(vacancies, key=lambda x: x['salary'], reverse=True)[:10]
#     return JsonResponse(top_vacancies, safe=False)


@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        company = Company.objects.all()
        company_json = [p.to_json() for p in company]
        return JsonResponse(company_json, safe=False)
    if request.method == 'POST':
        data = json.loads(request.body)
        company_name = data.get('name', '')
        company = Company.objects.create(name=company_name)
        return JsonResponse(company.to_json())


@csrf_exempt
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        new_company_name = data.get('name', company.name)
        # desc = data.get('desc', company.desc)
        company.name = new_company_name
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})

@csrf_exempt
def company_vacancies(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    vacancies = Vacancy.objects.filter(company=company)
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)



def vacancy_list(request):
    # select * from auth_product;
    vacancies = Vacancy.objects.all()
    products_json = [p.to_json() for p in vacancies]
    return JsonResponse(products_json, safe=False)


def vacancy_detail(request, vacancy_id):
    try:
        product = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse(product.to_json())


@csrf_exempt
def vacancy_topten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)