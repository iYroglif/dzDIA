from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from mysite.models import Student, Student_Lab_Course, Course, Course_Lab, Group
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from mysite import serializers

# Create your views here.


class Login(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            serializer = serializers.CurrentUserName(request.user)
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request):
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])
        if user is not None:
            login(request, user)
            serializer = serializers.CurrentUserName(request.user)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class Logout(APIView):
    def get(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class StudentCourses(APIView):
    def get(self, request):
        courses = Course.objects.raw('''SELECT *
                                    FROM ((mysite_course
                                    INNER JOIN mysite_course_lab ON mysite_course_lab.course_id = mysite_course.id)
                                    INNER JOIN mysite_student_lab_course ON mysite_student_lab_course.course_lab_id = mysite_course_lab.id)
                                    WHERE mysite_student_lab_course.student_id = {}
                                    GROUP BY mysite_course.id'''.format(request.user.pk))
        serializer = serializers.StudentCoursesSerializer(courses, many=True)
        return Response(serializer.data)


class StudentCourseLabs(APIView):
    def get(self, request, course_id):
        labs = Course_Lab.objects.raw('''SELECT *
                                    FROM mysite_course_lab
                                    INNER JOIN mysite_student_lab_course ON mysite_student_lab_course.course_lab_id = mysite_course_lab.id
                                    WHERE mysite_student_lab_course.student_id = {} AND mysite_course_lab.course_id = {}'''.format(request.user.pk, course_id))
        serializer = serializers.StudentCourseLabsSerializer(labs, many=True)
        return Response(serializer.data)


class StudentLab(APIView):
    def get(self, request, course_lab_id):
        lab = Student_Lab_Course.objects.get(
            course_lab=course_lab_id, student=request.user.pk)
        serializer = serializers.StudentCourseLabSerializer(lab)
        return Response(serializer.data)


# @TODO добавить request.user.pk для преподавателя для простмотра только своих курсов
class LabGroups(APIView):
    def get(self, request, course_lab_id):
        groups = Group.objects.raw('''SELECT *
                                FROM (mysite_group
                                INNER JOIN mysite_student ON mysite_student.group_id = mysite_group.id)
                                INNER JOIN mysite_student_lab_course ON mysite_student_lab_course.student_id = mysite_student.id
                                WHERE mysite_student_lab_course.course_lab_id = {}
                                GROUP BY mysite_group.id'''.format(course_lab_id))
        serializer = serializers.LabGroupsSerializer(groups, many=True)
        return Response(serializer.data)
