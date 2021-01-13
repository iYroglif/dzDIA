from rest_framework import viewsets

from .serializers import StudentSerializer, Student_Lab_CourseSerializer, StudentDetailSerializer
from ..models import Student, Student_Lab_Course

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    action_to_serializer = {
        "retrieve": StudentDetailSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class Student_Lab_CourseViewSet(viewsets.ModelViewSet):
    queryset = Student_Lab_Course.objects.all()
    serializer_class = Student_Lab_CourseSerializer