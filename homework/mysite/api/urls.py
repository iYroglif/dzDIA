from django.urls import path

from rest_framework import routers
from .views import StudentViewSet, Student_Lab_CourseViewSet

router = routers.SimpleRouter()
router.register('student', StudentViewSet, basename='student')
router.register('lab', Student_Lab_CourseViewSet, basename='lab')

urlpatterns = []
urlpatterns += router.urls