from django.db import models

# Create your models here.

class Course(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Course_Lab(models.Model):
    course = models.ForeignKey(Course, on_delete = models.CASCADE)
    name = models.CharField(max_length=100)
    task = models.TextField()

    def __str__(self):
        return self.course.name + " " + self.name

class Student(models.Model):
    surname = models.CharField(max_length=25)
    name = models.CharField(max_length=25)
    patronymic = models.CharField(max_length=25, blank=True, null=True)
    course = models.PositiveSmallIntegerField()
    group = models.CharField(max_length=10)
    labs = models.ManyToManyField(Course_Lab, through='Student_Lab_Course')

    def __str__(self):
        return self.group + " " + self.surname + " " + self.name + " " + self.patronymic

class Student_Lab_Course(models.Model):
    student = models.ForeignKey(Student, on_delete = models.CASCADE)
    course_lab = models.ForeignKey(Course_Lab, on_delete = models.CASCADE)
    report = models.FileField(blank=True, null=True)
    issued = models.DateTimeField(auto_now_add=True)
    completed = models.DateTimeField(blank=True, null=True)
    changed = models.DateTimeField(auto_now=True, null=True)