from django.contrib import admin
from .models import Course, Lecturer, Course_Lab, Group, Student, Student_Lab_Course

# Register your models here.


admin.site.register(Course)
admin.site.register(Lecturer)
admin.site.register(Course_Lab)
admin.site.register(Group)
admin.site.register(Student)
admin.site.register(Student_Lab_Course)
