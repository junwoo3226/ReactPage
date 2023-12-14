from django.urls import path, re_path
from uddApp import views
from .views import MainTextView, PeopleView, MainImageView, MainNewsBoxView, FacultyView, StaffView, LabView, AwardView, PublicationView, ExhibitionView, FacilityView, SearchView
urlpatterns = [
    # 모든 주소 가능하게 하기 위해 정규표현식 사용
        #path("", views.index, name="index"),
    # re_path(r'^(?!api/).*$', views.index, name="index"),
    re_path(r'^(?!api/|static/|media/).*$', views.index, name="index"),
    path('api/maintext/', MainTextView.as_view(), name='main-text'),
    path('api/mainimage/', MainImageView.as_view(), name='main-image'),
    path('api/mainnewsbox/', MainNewsBoxView.as_view(), name='main-newsbox'),
    path('api/people/', PeopleView.as_view(), name='people'),
    path('api/faculty/', FacultyView.as_view(), name='faculty'),
    path('api/staff/', StaffView.as_view(), name='staff'),
    path('api/lab/', LabView.as_view(), name='lab'),
    path('api/award/', AwardView.as_view(), name='award'),
    path('api/publication/', PublicationView.as_view(), name='publication'),
    path('api/exhibition/', ExhibitionView.as_view(), name='exhibition'),
    path('api/facility/', FacilityView.as_view(), name='facility'),
    path('api/search/', SearchView.as_view()),
]
