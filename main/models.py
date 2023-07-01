from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Anime(models.Model):
    title = models.CharField(max_length=100)
    year = models.IntegerField()
    genres = models.ManyToManyField(Genre)
    image = models.ImageField(upload_to='anime_img')

    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

class Character(models.Model):
    name = models.CharField(max_length=100)
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE)
    voice_actor = models.CharField(max_length=100)
    image = models.ImageField(upload_to='character_img')

    created_at = models.DateTimeField(auto_now_add=True)
    edited_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
