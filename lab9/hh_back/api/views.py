from django.shortcuts import render
from rest_framework import generics
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer

# Create your views here.

class CompanyListAPIView(generics.ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyDetailAPIView(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class CompanyVacanciesListAPIView(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        id = self.kwargs['id']
        return Vacancy.objects.filter(company=id)

class VacancyListAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class VacancyDetailAPIView(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacanciesAPIView(generics.ListAPIView):
    queryset = Vacancy.objects.order_by('-salary')[:10]
    serializer_class = VacancySerializer