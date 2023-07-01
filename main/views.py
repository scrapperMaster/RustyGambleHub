from django.shortcuts import render

from rest_framework import viewsets
from .models import Genre, Anime, Character
from .serializers import GenreSerializer, AnimeSerializer, CharacterSerializer

def join_discord(request):
    template_name = 'main/join_discord.html'
    return render(request, template_name)


class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer


class CharacterViewSet(viewsets.ModelViewSet):
    queryset = Character.objects.all()
    serializer_class = CharacterSerializer


class AnimeViewSet(viewsets.ModelViewSet):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
