from rest_framework import serializers
from .models import MainText, MainImage, MainNewsBox, People, Faculty, Staff, Lab, Award, Publication, Exhibition, Facility

# 메인 페이지의 메인 텍스트 모델을 직렬화
class MainTextSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainText
        fields = '__all__'  # 모든 필드 포함

# 메인 페이지의 메인 이미지 모델을 직렬화
class MainImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainImage
        fields = '__all__'  # 모든 필드 포함

# django_quill 필드를 직렬화하기 위한 클래스
class QuillField(serializers.ModelSerializer):
    text = serializers.SerializerMethodField()

    def get_text(self, obj):
        return obj.text.html


# 메인 뉴스박스의 모델을 직렬화
class MainNewsBoxSerializer(QuillField):

    class Meta:
        model = MainNewsBox
        fields = '__all__'



# 사람들 페이지의 목록에 넣을 내용 모델을 직렬화 스토리

class PeopleSerializer(QuillField):
    class Meta:
        model = People
        fields = '__all__'  # 모든 필드 포함
        

# 사람들 페이지의 목록에 넣을 내용 모델을 직렬화 Faculty
class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = '__all__'  # 모든 필드 포함

# 사람들 페이지의 목록에 넣을 내용 모델을 직렬화 Staff
class StaffSerializer(serializers.ModelSerializer):
    class Meta:
        model = Staff
        fields = '__all__'  # 모든 필드 포함

# Lab 페이지의 목록에 넣을 내용 모델을 직렬화 Lab
class LabSerializer(QuillField):
    class Meta:
        model = Lab
        fields = '__all__'  # 모든 필드 포함


# Award 페이지의 목록에 넣을 내용 모델을 직렬화 Award
class AwardSerializer(QuillField):
    class Meta:
        model = Award
        fields = '__all__'  # 모든 필드 포함

# Publication 페이지의 목록에 넣을 내용 모델을 직렬화 Publication
class PublicationSerializer(QuillField):
    class Meta:
        model = Publication
        fields = '__all__'  # 모든 필드 포함

# Exhibition 페이지의 목록에 넣을 내용 모델을 직렬화 Exhibition
class ExhibitionSerializer(QuillField):
    class Meta:
        model = Exhibition
        fields = '__all__'  # 모든 필드 포함

# Facility 페이지의 목록에 넣을 내용 모델을 직렬화 Facility
class FacilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Facility
        fields = '__all__'  # id 포함 모든 필드 포함
