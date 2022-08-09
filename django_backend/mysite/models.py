from django.db import models
from django.conf import settings

# Create your models here.


class Course(models.Model):
    name = models.CharField('Название', max_length=100)

    class Meta:
        verbose_name = 'Курс'
        verbose_name_plural = 'Курсы'

    def __str__(self):
        return self.name


class Lecturer(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    patronymic = models.CharField(
        'Отчество', max_length=25, blank=True, default='')
    courses = models.ManyToManyField(Course)

    class Meta:
        verbose_name = 'Преподаватель'
        verbose_name_plural = 'Преподаватели'

    def __str__(self):
        return self.user.last_name + " " + self.user.first_name + " " + self.patronymic


class Course_Lab(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    name = models.CharField('Название', max_length=100)
    task = models.TextField('Задание')

    class Meta:
        verbose_name = 'Лабораторная работа курса'
        verbose_name_plural = 'Лабораторные работы курса'

    def __str__(self):
        return self.course.name + " " + self.name


class Group(models.Model):
    name = models.CharField('Группа', max_length=10)

    class Meta:
        verbose_name = 'Группа'
        verbose_name_plural = 'Группы'

    def __str__(self):
        return self.name


class Student(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    patronymic = models.CharField(
        'Отчество', max_length=25, blank=True, default='')
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    labs = models.ManyToManyField(Course_Lab, through='Student_Lab_Course')

    class Meta:
        verbose_name = 'Студент'
        verbose_name_plural = 'Студенты'

    def __str__(self):
        return self.group.name + " " + self.user.last_name + " " + self.user.first_name + " " + self.patronymic


class Student_Lab_Course(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course_lab = models.ForeignKey(Course_Lab, on_delete=models.CASCADE)
    report = models.FileField('Отчет', blank=True, null=True)
    issued = models.DateTimeField('Выдана', auto_now_add=True)
    completed = models.DateTimeField('Выполнена', blank=True, null=True)
    changed = models.DateTimeField('Изменена', auto_now=True, null=True)

    class Meta:
        verbose_name = 'Лабораторная работа студента'
        verbose_name_plural = 'Лабораторные работы студентов'

    def __str__(self):
        return self.course_lab.name + " " + self.student.user.last_name + " " + self.student.user.first_name + " " + self.student.patronymic
