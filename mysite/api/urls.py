from django.urls import path

from rest_framework import routers
from .views import StudentsViewSet, Student_Lab_CourseViewSet, CoursesViewSet, CoursesLabsViewSet, DefStudent_Lab_CourseViewSet

router = routers.SimpleRouter()
router.register('students', StudentsViewSet, basename='students')
router.register('labs', Student_Lab_CourseViewSet, basename='labs')
router.register('courses', CoursesViewSet, basename='courses')
router.register('courses-labs', CoursesLabsViewSet, basename='courses-labs')

urlpatterns = []
urlpatterns += router.urls