from rest_framework import serializers
from .models import Genre, Anime, Character

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class CharacterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Character
        fields = '__all__'

class AnimeSerializer(serializers.ModelSerializer):
    genres = GenreSerializer(many=True, read_only=True)
    characters = CharacterSerializer(many=True, read_only=True)

    class Meta:
        model = Anime
        fields = ['id', 'title', 'year', 'genres', 'image', 'characters']