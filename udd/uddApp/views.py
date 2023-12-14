# views.py
from django.shortcuts import render

def index(request):
    return render(request,  'index.html')  # 여기서 'index.html' 경로를 수정


from rest_framework.generics import ListAPIView
from .serializers import MainTextSerializer, PeopleSerializer, MainImageSerializer, MainNewsBoxSerializer, FacultySerializer, StaffSerializer, LabSerializer, AwardSerializer, PublicationSerializer, ExhibitionSerializer, FacilitySerializer

from .models import MainText, People, MainImage, MainNewsBox, Faculty, Staff, Lab, Award, Publication, Exhibition, Facility

class MainTextView(ListAPIView):
    queryset = MainText.objects.all()
    serializer_class = MainTextSerializer

class MainImageView(ListAPIView):
    queryset = MainImage.objects.all()
    serializer_class = MainImageSerializer

class MainNewsBoxView(ListAPIView):
    queryset = MainNewsBox.objects.all()
    serializer_class = MainNewsBoxSerializer


class PeopleView(ListAPIView):
    queryset = People.objects.all()
    serializer_class = PeopleSerializer

class FacultyView(ListAPIView):
    queryset = Faculty.objects.all()
    serializer_class = FacultySerializer

class StaffView(ListAPIView):
    queryset = Staff.objects.all()
    serializer_class = StaffSerializer

class LabView(ListAPIView):
    queryset = Lab.objects.all()
    serializer_class = LabSerializer

class AwardView(ListAPIView):
    queryset = Award.objects.all()
    serializer_class = AwardSerializer

class PublicationView(ListAPIView):
    queryset = Publication.objects.all()
    serializer_class = PublicationSerializer

class ExhibitionView(ListAPIView):
    queryset = Exhibition.objects.all()
    serializer_class = ExhibitionSerializer

class FacilityView(ListAPIView):
    queryset = Facility.objects.all()
    serializer_class = FacilitySerializer



    # 검색 기능
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny

class SearchView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        query = request.GET.get('query', '')

        # People 모델 검색 쿼리
        people_query = Q(name__icontains=query) | Q(role__icontains=query) | Q(text__icontains=query)
        people_results = People.objects.filter(people_query)

       
        # Award 모델 검색 쿼리
        award_query = Q(title__icontains=query) | Q(text__icontains=query) | Q(name__icontains=query) | Q(brand__icontains=query)
        award_results = Award.objects.filter(award_query)

        # Publication 모델 검색 쿼리
        publication_query = Q(title__icontains=query) | Q(text__icontains=query)
        publication_results = Publication.objects.filter(publication_query)

        # Exhibition 모델 검색 쿼리
        exhibition_query = Q(title__icontains=query) | Q(text__icontains=query) | Q(name__icontains=query)
        exhibition_results = Exhibition.objects.filter(exhibition_query)

      
        # 결과 직렬화
        results = {
            'people': PeopleSerializer(people_results, many=True).data,
            'award': AwardSerializer(award_results, many=True).data,
            'publication': PublicationSerializer(publication_results, many=True).data,
            'exhibition': ExhibitionSerializer(exhibition_results, many=True).data,
        }
        
        return Response(results)