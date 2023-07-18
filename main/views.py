from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from pysteamsignin.steamsignin import SteamSignIn
from rest_framework.reverse import reverse

from main.models import UserProfile

def get_steam_auth_url(request):
    steam_login = SteamSignIn()
    encoded_data = steam_login.ConstructURL(request.build_absolute_uri(reverse('main:login_done')))
    return JsonResponse({'auth_url': encoded_data})

def login(request):
    if 'steam_id' in request.session:
        # Если пользователь уже аутентифицирован, перенаправляем его на защищенную страницу.
        return redirect('main:protected')

    # Выполняем перенаправление на страницу аутентификации Steam
    steam_login = SteamSignIn()
    encoded_data = steam_login.ConstructURL(request.build_absolute_uri(reverse('main:login_done')))
    return redirect(encoded_data)


def login_done(request):
    steam_login = SteamSignIn()
    steam_id = steam_login.ValidateResults(request.GET)

    if steam_id:
        # Проверяем, существует ли пользователь с данным SteamID
        user, created = UserProfile.objects.get_or_create(steam_id=steam_id)

        # Сохраняем SteamID в сессии
        request.session['steam_id'] = steam_id

        # Можно также сохранить информацию о пользователе в сессии или в базе данных
        request.session['username'] = user.username
        request.session['profile_photo'] = user.avatar

        return redirect('main:protected')
    else:
        # Если аутентификация не удалась, перенаправляем пользователя на страницу ошибки.
        return redirect('main:error')

def logout(request):
    if 'steam_id' in request.session:
        # Если пользователь аутентифицирован, удаляем SteamID из сессии.
        del request.session['steam_id']
    return redirect('localhost:3000')


def protected(request):
    if 'steam_id' in request.session:
        # Получаем пользователя по SteamID из базы данных
        steam_id = request.session['steam_id']
        user = UserProfile.objects.get(steam_id=steam_id)

        # Если пользователь аутентифицирован, отображаем защищенную страницу.
        return HttpResponse(f'Protected Content for SteamID: {user.steam_id}')
    else:
        # Если пользователь не аутентифицирован, перенаправляем его на страницу входа.
        return redirect('main:login')


def error(request):
    return HttpResponse('Ошибка аутентификации. Пожалуйста, попробуйте снова.')

def get_user_data(request):
    if 'steam_id' in request.session:
        steam_id = request.session['steam_id']
        try:
            user = UserProfile.objects.get(steam_id=steam_id)
            # Возвращаем данные пользователя в формате JSON
            return JsonResponse({
                'steam_id': user.steam_id,
                # Дополнительные поля о пользователе, если они есть
                'username': user.username,
                'avatar': user.avatar,
            })
        except UserProfile.DoesNotExist:
            return JsonResponse({'error': 'Пользователь не найден'}, status=404)

    return JsonResponse({'error': 'Пользователь не аутентифицирован'}, status=401)
