from django.urls import path, include
from django.conf.urls.static import static
from RustyGambleHub import settings

from django.urls import path

from . import views

app_name = 'main'

urlpatterns = [
    path('steam_login/', views.steam_login, name='steam_login'),
    path('processlogin/', views.steam_authenticate, name='process_steam_login'),
    path('user_data/', views.get_user_data, name='get_user_data'),
    path('get_inventory_items/', views.get_inventory_items, name='get_inventory_items'),
    path('logout/', views.logout_view, name='logout'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
