МГТУ им. Н.Э. Баумана Кафедра ИУ5

# Домашнее задание по курсу "Разработка Интернет-Приложений"

> Терентьев В.О. Группа ИУ5-53Б

- Создание прототипа веб-приложения на основе базы данных с использованием фреймворка Django

## Стек:

- Frontend: React JS, React Router, Create React App, Material UI
- Backend: Django, Django REST framework
- Deployment: Docker
- Web server: Nginx
- WSGI server: Gunicorn
- DB: PostgreSQL
- Host: Heroku

## Скрины

![](./imgs/home.jpg)

![](./imgs/course_labs.jpg)

![](./imgs/lab.jpg)

![](./imgs//groups_labs.jpg)

## ER-диаграмма:
```mermaid
erDiagram
    Course {
        integer id
        varchar100 name
        text description
    }
    Lecturer {
        integer id
        varchar25 patronymic
        integer user_id
    }
    lecturer_courses {
        integer id
        bigint lecturer_id
        bigint course_id
    }
    Course_Lab {
        integer id
        varchar100 name
        text task
        bigint course_id
    }
    Group {
        integer id
        varchar10 name
    }
    Student {
        integer id
        varchar25 patronymic
        bigint group_id
        integer user_id
    }
    Student_Lab_Course {
        integer id
        varchar100 report
        datetime issued
        datetime completed
        datetime changed
        bigint course_lab_id
        bigint student_id
        smallint score
        text comment
    }
    auth_user {
        integer id
        varchar128 password
        datetime last_login
        bool is_superuser
        varchar150 username
        varchar150 last_name
        varchar254 email
        bool is_staff
        bool is_active
        datetime date_joined
        varchar150 first_name
    }
    Lecturer ||--o{ lecturer_courses : teaches
    Course ||--o{ lecturer_courses : teaches
    Course ||--o{ Course_Lab : contains
    Group ||--o{ Student : contains
    Student ||--o{ Student_Lab_Course : has
    Course_Lab ||--o{ Student_Lab_Course : has
    auth_user ||--|| Lecturer : is
    auth_user ||--|| Student : is
```

### Отчет:

[pdf](homework.pdf)