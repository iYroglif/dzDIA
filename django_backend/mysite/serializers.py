from dataclasses import field
from django.contrib.auth.models import User
from mysite.models import Student, Student_Lab_Course, Course_Lab, Course, Group, Lecturer
from rest_framework import serializers


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['id']


class LecturerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecturer
        fields = ['id']


class CurrentUser(serializers.ModelSerializer):
    student = StudentSerializer()
    lecturer = LecturerSerializer()

    class Meta:
        model = User
        fields = ['username', 'student', 'lecturer']


class StudentCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'description']


class CourseLabsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course_Lab
        fields = ['id', 'name', 'task']


class StudentCourseLabSerializerCourse(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['name']


class StudentCourseLabSerializerCourseLab(serializers.ModelSerializer):
    course = StudentCourseLabSerializerCourse()

    class Meta:
        model = Course_Lab
        fields = ['name', 'task', 'course']


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['last_name', 'first_name']


class StudentCourseLabSerializerStudent(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ['patronymic', 'user']


class StudentCourseLabSerializer(serializers.ModelSerializer):
    course_lab = StudentCourseLabSerializerCourseLab()
    student = StudentCourseLabSerializerStudent()

    class Meta:
        model = Student_Lab_Course
        fields = ['id', 'course_lab', 'report', 'issued',
                  'completed', 'changed', 'score', 'comment', 'student']


class GroupStudentLabGroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'name']


class UserStudentLabGroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name']


class StudentLabGroupsSerializer(serializers.ModelSerializer):
    user = UserStudentLabGroupsSerializer()
    group = GroupStudentLabGroupsSerializer()

    class Meta:
        model = Student
        fields = ['user', 'group', 'patronymic']


class LabGroupsSerializer(serializers.ModelSerializer):
    student = StudentLabGroupsSerializer()

    class Meta:
        model = Student_Lab_Course
        fields = ['id', 'student', 'completed', 'changed']


class CourseLabSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course_Lab
        fields = ['name', 'course']
