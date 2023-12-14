from djongo import models
from django.utils import timezone
timezone.now()
from django_quill.fields import QuillField

# 메인 이미지 (메인페이지)
class MainImage(models.Model):
    name = models.CharField(max_length=100, default='Default Name')
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')

    def __str__(self):
        return self.name
# 메인 페이지 텍스트
class MainText(models.Model):
    mainText = models.TextField()

    def __str__(self):
        return self.mainText

# 뉴스 박스
class MainNewsBox(models.Model):
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')
    title = models.CharField(max_length=100)
    text = QuillField()
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title

# 사람 스토리
class People(models.Model):
    # 이미지 넣어줘 코파일럿!
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')


    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)

    text = QuillField(default='')
    # 날짜 필드 추가
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.name
    
# 사람 Faculty
class Faculty(models.Model):
    # 이미지 넣어줘 코파일럿!
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')


    name = models.CharField(max_length=100)
    #직업
    job = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100, blank=True)
    # 연구실 
    # 빈칸이 될수 있음
    lab = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.name

# 사람 Staff
class Staff(models.Model):
    # 이미지 넣어줘 코파일럿!


    name = models.CharField(max_length=100)
    #직업
    job = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    # 위치
    location = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
# 연구실 Lab
class Lab(models.Model):
    # 이미지 넣어줘 코파일럿!
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')


    name = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    text = QuillField(default='')
    keyword = models.CharField(max_length=100)
    lab = models.CharField(max_length=100 , blank=True)

    def __str__(self):
        return self.name
    
# 결과물 Award
class Award(models.Model):
    # 이미지 넣어줘 코파일럿!
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')


    title = models.CharField(max_length=100)
    text = QuillField(default='')
    date = models.DateField(default=timezone.now)

    name = models.CharField(max_length=100 , blank=True)
    detailname = models.CharField(max_length=100, blank=True)

    brand = models.CharField(max_length=100, blank=True)
    brandyear = models.CharField(max_length=100, blank=True)

    def __str__(self):
        return self.title
    
# 결과물 Publication
class Publication(models.Model):
    # 이미지 넣어줘 코파일럿!
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')


    title = models.CharField(max_length=100)
    text = QuillField(default='')
    date = models.DateField(default=timezone.now)

    def __str__(self):
        return self.title
    
# 결과물 Exhibition
class Exhibition(models.Model):
    # 이미지 넣어줘 코파일럿!
    image = models.ImageField(upload_to='images/', default='images/none/no-img.jpg')


    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100 , blank=True)
    text = QuillField(default='')
    
    startmonth = models.CharField(max_length=100, blank=True)
    startday = models.IntegerField(blank=True)

    nowmonth = models.CharField(max_length=100, blank=True)
    nowday = models.IntegerField(blank=True)

    year = models.IntegerField(blank=True)

    startdate = models.CharField(max_length=100, blank=True)
    nowdate = models.CharField(max_length=100)

    def __str__(self):
        return self.title

# Tools의 Facility
class Facility(models.Model):
    id= models.CharField(max_length=20,primary_key=True, serialize=False)
    title = models.CharField(max_length=100)
    url = models.URLField(max_length=300)

    def __str__(self):
        return self.id