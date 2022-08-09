"""django_backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from rest_framework import routers
from mysite import views

router = routers.DefaultRouter()
router.register(r'students', views.StudentViewSet)
#router.register(r'courses', views.CoursesViewSet)
#router.register('labs', views.Student_Lab_CourseViewSet, basename='labs')
#router.register('courses-labs', views.CoursesLabsViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api/', include(router.urls)),
    path('api/login/', views.Login.as_view()),
    path('api/courses/', views.StudentCourses.as_view()),
    path('api/courses/<int:course_id>', views.StudentCourseLabs.as_view()),
    path('api/labs/<int:course_lab_id>', views.StudentLab.as_view()),
]
