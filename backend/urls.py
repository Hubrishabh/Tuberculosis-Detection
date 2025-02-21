from django.contrib import admin
from django.urls import path, include
from api import views  # Import views from api app

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),  # Homepage URL
    path('api/', include('api.urls')),  # Include API URLs
]
