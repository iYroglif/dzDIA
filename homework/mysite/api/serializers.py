from rest_framework import serializers

from ..models import Student, Student_Lab_Course

class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = '__all__'


class StudentDetailSerializer(serializers.ModelSerializer):
    
    labs = serializers.SerializerMethodField()

    class Meta:
        model = Student
        fields = '__all__'

    @staticmethod
    def get_labs(obj):
        return Student_Lab_CourseSerializer(Student_Lab_Course.objects.filter(student=obj), many=True).data


class Student_Lab_CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student_Lab_Course
        fields = '__all__'