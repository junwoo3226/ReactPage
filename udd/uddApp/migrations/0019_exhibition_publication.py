# Generated by Django 4.1.13 on 2023-12-09 04:26

from django.db import migrations, models
import django.utils.timezone
import django_quill.fields


class Migration(migrations.Migration):

    dependencies = [
        ('uddApp', '0018_alter_award_detailname_alter_award_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Exhibition',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='images/none/no-img.jpg', upload_to='images/')),
                ('title', models.CharField(max_length=100)),
                ('name', models.CharField(blank=True, max_length=100)),
                ('text', django_quill.fields.QuillField(default='')),
                ('startmonth', models.CharField(blank=True, max_length=100)),
                ('startday', models.IntegerField(blank=True)),
                ('nowmonth', models.CharField(blank=True, max_length=100)),
                ('nowday', models.IntegerField(blank=True)),
                ('year', models.IntegerField(blank=True)),
                ('startdate', models.CharField(blank=True, max_length=100)),
                ('nowdate', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='images/none/no-img.jpg', upload_to='images/')),
                ('title', models.CharField(max_length=100)),
                ('text', django_quill.fields.QuillField(default='')),
                ('date', models.DateField(default=django.utils.timezone.now)),
            ],
        ),
    ]
