from django.contrib import admin

from main.models import Genre, Anime, Character

# Register your models here.

admin.site.register(Genre)
admin.site.register(Anime)
admin.site.register(Character)