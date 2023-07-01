from django.urls import path, include
from django.conf.urls.static import static
from RustyGambleHub import settings
from rest_framework import routers
from .views import GenreViewSet, AnimeViewSet, CharacterViewSet

router = routers.DefaultRouter()
router.register(r'genres', GenreViewSet)
router.register(r'anime', AnimeViewSet)
router.register(r'characters', CharacterViewSet)

urlpatterns = [
    path('', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)