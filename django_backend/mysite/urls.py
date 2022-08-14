from django.urls import path
from mysite import views

urlpatterns = [
    path('login/', views.Login.as_view()),
    path('logout/', views.Logout.as_view()),
    path('courses/', views.StudentCourses.as_view()),
    path('course-labs/<int:course_id>', views.StudentCourseLabs.as_view()),
    path('labs/<int:course_lab_id>', views.StudentLab.as_view()),
    path('lab-groups/<int:course_lab_id>', views.LabGroups.as_view()),
]