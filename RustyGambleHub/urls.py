from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from social_django.urls import urlpatterns as social_django_urls

from RustyGambleHub import settings

urlpatterns = [
    path('admin/', admin.site.urls),

    path('api/', include('main.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += social_django_urls

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
