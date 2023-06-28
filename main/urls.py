from django.urls import path, include
from django.conf.urls.static import static

from RustyGambleHub import settings
from main import views

urlpatterns = [
    path('', views.join_discord)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)