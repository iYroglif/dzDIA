"""homework URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from mysite import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index),
    path('students/', views.students),
    path('students/<int:id>/', views.student_detail),
    path('labs/<int:id>/', views.lab_detail),
    path('courses/', views.courses),
    path('courses/<int:id>/', views.course_labs),
    path('courses-labs/<int:id>/', views.courses_labs),
    path('students-edit/', views.students_edit),
    path('report/', views.report),
    path('api/', include('mysite.api.urls'))
]