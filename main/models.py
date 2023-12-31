from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    steam_id = models.CharField(max_length=255, unique=True)
    username = models.CharField(max_length=255, blank=True, null=True)
    avatar = models.URLField(blank=True, null=True)  # Ссылка на аватар пользователя из Steam API
    profile_url = models.URLField(blank=True, null=True)
    trade_link = models.URLField(blank=True, null=True)  # Ссылка на обмен пользователя

    # Дополнительные поля для статистики и других данных

    def __str__(self):
        return self.username
