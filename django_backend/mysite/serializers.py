from django.contrib.auth.models import User
from mysite.models import Student, Student_Lab_Course, Course_Lab, Course, Group
from rest_framework import serializers


class CurrentUserName(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class StudentCoursesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'name', 'description']


class StudentCourseLabsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course_Lab
        fields = ['id', 'name', 'task']


class StudentCourseLabSerializerCourseLab(serializers.ModelSerializer):
    course = StudentCoursesSerializer()

    class Meta:
        model = Course_Lab
        fields = ['name', 'task', 'course']


class StudentCourseLabSerializer(serializers.ModelSerializer):
    course_lab = StudentCourseLabSerializerCourseLab()

    class Meta:
        model = Student_Lab_Course
        fields = '__all__'


class LabGroupsSerializer(serializers.ModelSerializer):
    students = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = ['id', 'name', 'students']

    @staticmethod
    def get_students(obj):
        return StudentSerializer(Student.objects.filter(group_id=obj.pk), many=True).data


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class CourseSerializer(serializers.HyperlinkedModelSerializer):

    #course_labs = serializers.SerializerMethodField()

    class Meta:
        model = Course
        fields = '__all__'

    # @staticmethod
    # def get_course_labs(obj):
    #    return Course_LabSerializer(Course_Lab.objects.filter(course=obj), many=True).data


class StudentDetailSerializer(serializers.ModelSerializer):

    labs = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = '__all__'

    @staticmethod
    def get_labs(obj):
        return Student_Lab_CourseSerializer(Student_Lab_Course.objects.filter(student=obj), many=True).data


class TempCourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = '__all__'


class TempStudent_Lab_CourseSerializer(serializers.ModelSerializer):

    student = StudentSerializer()

    class Meta:
        model = Student_Lab_Course
        fields = '__all__'


class Course_LabSerializer(serializers.ModelSerializer):

    course = TempCourseSerializer()
    labs = serializers.SerializerMethodField()

    class Meta:
        model = Course_Lab
        fields = '__all__'

    @staticmethod
    def get_labs(obj):
        return TempStudent_Lab_CourseSerializer(Student_Lab_Course.objects.filter(course_lab=obj), many=True).data


class Student_Lab_CourseSerializer(serializers.ModelSerializer):

    course_lab = Course_LabSerializer()

    class Meta:
        model = Student_Lab_Course
        fields = '__all__'


class DefStudent_Lab_CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student_Lab_Course
        fields = '__all__'
