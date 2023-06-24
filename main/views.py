from django.shortcuts import render


def join_discord(request):
    template_name = 'main/join_discord.html'
    return render(request, template_name)
