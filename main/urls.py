from django.urls import path, include
from django.conf.urls.static import static
from RustyGambleHub import settings
from rest_framework import routers

from django.urls import path

from . import views

app_name = 'main'

urlpatterns = [
                  path('get_steam_auth_url/', views.get_steam_auth_url, name='get_steam_auth_url'),
                  path('login/', views.login, name='login'),
                  path('auth/login/steam/', views.login_done, name='login_done'),
                  path('logout/', views.logout, name='logout'),
                  path('protected/', views.protected, name='protected'),
                  path('error/', views.error, name='error'),
                  path('user_data/', views.get_user_data, name='get_user_data'),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
