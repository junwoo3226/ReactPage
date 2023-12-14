from django.contrib import admin
from .models import People, MainText, MainImage, MainNewsBox, Faculty, Staff, Lab, Award, Publication, Exhibition, Facility

# Register your models here.
admin.site.register(MainText)
admin.site.register(MainImage)
admin.site.register(MainNewsBox)




admin.site.register(People)
admin.site.register(Faculty)
admin.site.register(Staff)

admin.site.register(Award)
admin.site.register(Publication)
admin.site.register(Exhibition)



admin.site.register(Lab)

admin.site.register(Facility)



