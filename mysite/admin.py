from django.contrib import admin

from .models import Course, Course_Lab, Student, Student_Lab_Course

# Register your models here.

admin.site.register(Course)
admin.site.register(Course_Lab)
admin.site.register(Student)
admin.site.register(Student_Lab_Course)