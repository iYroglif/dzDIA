# Generated by Django 4.0.6 on 2022-08-18 15:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mysite', '0006_alter_lecturer_user_alter_student_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='description',
            field=models.TextField(blank=True, default='', verbose_name='Описание'),
        ),
    ]
