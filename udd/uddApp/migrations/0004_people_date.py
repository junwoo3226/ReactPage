# Generated by Django 4.1.13 on 2023-12-02 11:15

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('uddApp', '0003_maintext_people_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='people',
            name='date',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]