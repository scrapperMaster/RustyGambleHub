from django.contrib import admin
from django.urls import path, include
from django.conf.urls.static import static
from social_django.urls import urlpatterns as social_django_urls

from RustyGambleHub import settings
from main import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.discrod),

    path('api/', include('main.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    import debug_toolbar
    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
