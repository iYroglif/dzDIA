from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'index.html',{})

def students(request):
    return render(request, 'index.html',{})

def student_detail(request, id):
    return render(request, 'index.html',{})

def lab_detail(request, id):
    return render(request, 'index.html',{})

def courses(request):
    return render(request, 'index.html',{})

def course_labs(request, id):
    return render(request, 'index.html',{})

def courses_labs(request, id):
    return render(request, 'index.html',{})

def students_edit(request):
    return render(request, 'index.html',{})

def report(request):
    return render(request, 'index.html',{})