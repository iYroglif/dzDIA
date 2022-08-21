FROM python:3-slim
WORKDIR /django
COPY requirements.txt requirements.txt
RUN python -m pip install -r requirements.txt
COPY . .
RUN python manage.py collectstatic --noinput
CMD gunicorn django_backend.wsgi --bind 0.0.0.0
EXPOSE 8000