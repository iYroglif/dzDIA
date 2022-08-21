from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from mysite.models import Student, Student_Lab_Course, Course, Course_Lab, Group, Lecturer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from mysite import serializers
from django.http.response import HttpResponse
from django.utils import timezone

# Create your views here.


class Login(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            serializer = serializers.CurrentUser(request.user)
            return Response(serializer.data)
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    def post(self, request):
        user = authenticate(
            request, username=request.POST['username'], password=request.POST['password'])
        if user is not None:
            login(request, user)
            if Student.objects.filter(user_id=request.user.pk).exists():
                user = User.objects.get(id=request.user.pk)
            elif Lecturer.objects.filter(user_id=request.user.pk).exists():
                user = User.objects.get(id=request.user.pk)
            # else: @TODO обработка того что пользователя нет ни в студентах ни в преподавателях
            serializer = serializers.CurrentUser(user)
            return Response(serializer.data)
        else:
            return Response(status=status.HTTP_401_UNAUTHORIZED)


class Logout(APIView):
    def get(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)


class StudentCourses(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.groups.filter(name='Преподаватели').exists():
            courses = Course.objects.raw('''SELECT mysite_course.id, mysite_course.name, mysite_course.description, COUNT(mysite_course.id)
                                        FROM ((mysite_course
                                        INNER JOIN mysite_lecturer_courses ON mysite_lecturer_courses.course_id = mysite_course.id)
                                        INNER JOIN mysite_lecturer ON mysite_lecturer.id = mysite_lecturer_courses.lecturer_id)
                                        WHERE mysite_lecturer.user_id = {}
                                        GROUP BY mysite_course.id'''.format(request.user.pk))
        else:
            courses = Course.objects.raw('''SELECT mysite_course.id, mysite_course.name, mysite_course.description, COUNT(mysite_course.id)
                                        FROM (((mysite_course
                                        INNER JOIN mysite_course_lab ON mysite_course_lab.course_id = mysite_course.id)
                                        INNER JOIN mysite_student_lab_course ON mysite_student_lab_course.course_lab_id = mysite_course_lab.id)
                                        INNER JOIN mysite_student ON mysite_student.id = mysite_student_lab_course.student_id)
                                        WHERE mysite_student.user_id = {}
                                        GROUP BY mysite_course.id'''.format(request.user.pk))
        serializer = serializers.StudentCoursesSerializer(courses, many=True)
        return Response(serializer.data)


class CourseLabs(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, course_id):
        if request.user.groups.filter(name='Преподаватели').exists():
            labs = Course_Lab.objects.raw('''SELECT *
                                        FROM ((mysite_course_lab
                                        INNER JOIN mysite_course ON mysite_course.id = mysite_course_lab.course_id)
                                        INNER JOIN mysite_lecturer_courses ON mysite_lecturer_courses.course_id = mysite_course.id)
                                        INNER JOIN mysite_lecturer ON mysite_lecturer.id = mysite_lecturer_courses.lecturer_id
                                        WHERE mysite_lecturer.user_id = {} AND mysite_course_lab.course_id = {}'''.format(request.user.pk, course_id))
        else:
            labs = Course_Lab.objects.raw('''SELECT *
                                        FROM (mysite_course_lab
                                        INNER JOIN mysite_student_lab_course ON mysite_student_lab_course.course_lab_id = mysite_course_lab.id)
                                        INNER JOIN mysite_student ON mysite_student.id = mysite_student_lab_course.student_id
                                        WHERE mysite_student.user_id = {} AND mysite_course_lab.course_id = {}'''.format(request.user.pk, course_id))
        serializer = serializers.CourseLabsSerializer(labs, many=True)
        return Response(serializer.data)


class StudentLab(APIView):
    # @TODO добавить SQL запрос для преподавателя чтобы только нужные преподаватели имели доступ к лаб. работе

    permission_classes = [IsAuthenticated]

    def get(self, request, course_lab_id):
        if request.user.groups.filter(name='Преподаватели').exists():
            lab = Student_Lab_Course.objects.get(id=course_lab_id)
        else:
            lab = Student_Lab_Course.objects.raw('''SELECT *
                                FROM ((mysite_student_lab_course
                                INNER JOIN mysite_course_lab ON mysite_course_lab.id = mysite_student_lab_course.course_lab_id)
                                INNER JOIN mysite_course ON mysite_course.id = mysite_course_lab.course_id)
                                INNER JOIN mysite_student ON mysite_student.id = mysite_student_lab_course.student_id
                                WHERE mysite_student_lab_course.course_lab_id = {} AND mysite_student.user_id = {}'''.format(course_lab_id, request.user.pk))[0]
        serializer = serializers.StudentCourseLabSerializer(lab)
        return Response(serializer.data)

    def put(self, request, course_lab_id):
        if request.user.groups.filter(name='Преподаватели').exists():
            lab = Student_Lab_Course.objects.get(id=course_lab_id)
            lab.score = request.data["score"]
            lab.comment = request.data["comment"]
        else:
            lab = Student_Lab_Course.objects.raw('''SELECT *
                                FROM ((mysite_student_lab_course
                                INNER JOIN mysite_course_lab ON mysite_course_lab.id = mysite_student_lab_course.course_lab_id)
                                INNER JOIN mysite_course ON mysite_course.id = mysite_course_lab.course_id)
                                INNER JOIN mysite_student ON mysite_student.id = mysite_student_lab_course.student_id
                                WHERE mysite_student_lab_course.course_lab_id = {} AND mysite_student.user_id = {}'''.format(course_lab_id, request.user.pk))[0]
            lab.report.delete()
            lab.report = request.data["file"]
            lab.completed = timezone.now()
        lab.save()
        context = {'request': request}
        serializer = serializers.StudentCourseLabSerializer(
            lab, context=context)
        return Response(serializer.data)
        # @TODO добавить обработку ошибки сохранения изменений данных
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# @TODO добавить request.user.pk для преподавателя для просмотра только своих курсов
class LabGroups(APIView):
    def get(self, request, course_lab_id):
        labs = Student_Lab_Course.objects.raw('''SELECT *
                                FROM (mysite_student_lab_course
                                INNER JOIN mysite_student ON mysite_student.id = mysite_student_lab_course.student_id)
                                INNER JOIN mysite_group ON mysite_group.id = mysite_student.group_id
                                WHERE mysite_student_lab_course.course_lab_id = {}
                                ORDER BY mysite_group.id'''.format(course_lab_id))
        serializer = serializers.LabGroupsSerializer(labs, many=True)
        return Response(serializer.data)


class CourseLab(APIView):
    def get(self, request, course_lab_id):
        course = Course_Lab.objects.get(id=course_lab_id)
        serializer = serializers.CourseLabSerializer(course)
        return Response(serializer.data)


class FileDownload(APIView):
    permission_classes = [IsAuthenticated]

    # @TODO добавить проверку пользователя что он имеет право для скачивания этого файла
    def get(self, request, lab_id):
        lab = Student_Lab_Course.objects.get(id=lab_id)
        response = HttpResponse(lab.report)
        response['Content-Disposition'] = "attachment; filename=" + \
            lab.report.name
        return response
