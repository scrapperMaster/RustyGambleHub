import json
import time

import django.contrib.auth
import requests
from django.contrib.auth import logout, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import UserProfile

STEAM_API_KEY = 'DABF63EF1F7B869BF6D51A4014AE2FF4'  # Замените на свой Steam API ключ
STEAM_LOGIN_URL = 'https://steamcommunity.com/openid/login'
RETURN_TO_URL = 'https://7485-95-174-127-174.ngrok-free.app'


def steam_login(request):
    print('Вошли в steam_login')
    if request.method == 'GET':
        print("Метод реквеста - ГЕТ")
        params = {
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.mode': 'checkid_setup',
            'openid.return_to': RETURN_TO_URL,
            'openid.realm': RETURN_TO_URL,
            'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
            'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
        }
        print("Параметры записаны, произойдёт редирект на Стим.")

        # Redirect the user to the Steam sign-in page using the constructed URL
        return redirect(STEAM_LOGIN_URL + '?' + '&'.join([f'{key}={value}' for key, value in params.items()]))
    print("Сейчас будет ошибка")
    return JsonResponse({'error': 'Invalid request method.'}, status=400)



def steam_authenticate(request):
    print("Процесс Стим логин")
    # Проверяем SteamID пользователя с использованием Steam Web API
    print('________________________________________________________________________')
    for key, value in request.session.items():
        print(key, value)
    print('________________________________________________________________________')

    steam_encoded_data = dict(request.GET)
    print(steam_encoded_data)

    openid_identity = steam_encoded_data.get('openid.identity', '')  # Получаем список URL-адресов
    print("openid_identity")
    print(openid_identity)
    steam_user_id = openid_identity[-1].split('/')[-1]  # Извлекаем последний элемент и разбиваем URL

    print("steam_user_id")
    print(steam_user_id)

    if not steam_user_id:
        return JsonResponse({'error': 'Failed to validate Steam login data. No fkn ID'}, status=400)

    # Проверяем SteamID пользователя с использованием Steam Web API
    print('________________________________________________________________________')
    for key, value in request.session.items():
        print(key, value)
    print('________________________________________________________________________')
    response = requests.get(f'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={STEAM_API_KEY}&steamids={steam_user_id}')

    frontend_url = 'https://0778-185-244-215-54.ngrok-free.app'  # Замените на URL вашего фронтенда

    params = {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': frontend_url,
        'openid.realm': frontend_url,
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
    }

    if response.status_code == 200:
        print('Code 200')
        data = response.json()
        player_data = data.get('response', {}).get('players', [])

        if player_data:
            # Остальной код оставляем без изменений
            # Создаем или получаем профиль пользователя, связанный с Steam аккаунтом
            print('PLAYER DATA')

            player_data = player_data[0]
            print(player_data)
            steam_id = player_data.get('steamid', '')
            username = player_data.get('personaname', '')
            avatar = player_data.get('avatarfull', '')
            profile_url = player_data.get('profile_url', '')
            user, created = User.objects.get_or_create(username=username)
            user_profile, profile_created = UserProfile.objects.get_or_create(user=user, steam_id=steam_id,
                                                                              username=username, avatar=avatar)

            login(request, user, 'django.contrib.auth.backends.ModelBackend')

            print('________________________________________________________________________')
            for key, value in request.session.items():
                print(key, value)
            print('________________________________________________________________________')
            # Выполняем перенаправление на стим и добавляем заголовки CORS при необходимости
            response = requests.get(
                STEAM_LOGIN_URL + '?' + '&'.join([f'{key}={value}' for key, value in params.items()]),
                allow_redirects=False)

            # Здесь обработка перенаправления и добавление заголовков CORS
            while response.status_code == 302:
                redirect_url = response.headers.get('Location')
                if redirect_url:
                    response = requests.get(redirect_url, allow_redirects=False)

            # Проверяем, что все прошло успешно
            if response.status_code == 200:
                # Сохраняем данные о пользователе в сессию
                request.session['user_data'] = {
                    'steam_id': user_profile.steam_id,
                    'username': user_profile.username,
                    'avatar': user_profile.avatar,
                    # Add other necessary user data here
                }
                request.session.modified = True

                # Перенаправляем пользователя на ваш фронтенд

                return redirect(frontend_url)
            else:
                # Возвращаем ошибку, если произошла проблема с перенаправлением
                return JsonResponse({'error': 'Failed to complete Steam login process'}, status=500)

    return JsonResponse({'error': 'Failed to get user data from Steam API'}, status=500)



@login_required
def get_user_data(request):
    print("ПОЛУЧЕНИЕ ДАННЫХ ПОЛЬЗОВАТЕЛЯ")
    print('Ключи сессий')
    for key, value in request.session.items():
        print(key, value)

    print("Получаем данные пользователя")
    print(request.user)

    print('Ключи сессии')
    for key, value in request.session.items():
        print(key, value)

    if 'user_data' in request.session:
        user_data = request.session['user_data']
        return JsonResponse({'user_data': user_data})
    else:
        return JsonResponse({'error': 'User not authenticated'}, status=401)


@login_required
def get_inventory_items(request):
    print("ПОЛУЧЕНИЕ ИНВЕНТАРЯ ПОЛЬЗОВАТЕЛЯ")
    print('Ключи сессии')
    for key, value in request.session.items():
        print(key, value)

    # Проверяем, что пользователь аутентифицирован и его steam_id сохранен в сессии
    if 'user_data' not in request.session:
        return JsonResponse({'error': 'User not authenticated'}, status=401)

    user_data = request.session['user_data']
    steam_id = user_data.get('steam_id')

    if not steam_id:
        return JsonResponse({'error': 'Steam ID not found in user data'}, status=400)

    # Делаем запрос к API Steam, чтобы получить список предметов в инвентаре
    print("Начало проверки Responce")
    time.sleep(2)  # Добавляем задержку в 2 секунды перед запросом
    response = requests.get(f'https://steamcommunity.com/inventory/{steam_id}/252490/2?l=english&count=5000')
    print("Конец проверки Responce")

    if response.status_code == 200:
        data = response.json()
        if data.get('success') == 1:
            assets = data.get('assets', [])
            descriptions = data.get('descriptions', [])

            # Определение тегов для проверки на tradable
            tradable_tags = ["marketable", "tradable"]

            # Функция для проверки наличия tradable в тегах

            formatted_items = []

            for item in data['assets']:
                item_classid = item['classid']
                item_instanceid = item['instanceid']

                description = next((desc for desc in data['descriptions'] if
                                    desc['classid'] == item_classid and desc['instanceid'] == item_instanceid), None)

                if description:
                    item_name = description.get('name')
                    item_tradable = description.get('tradable', 0)
                    item_tags = description.get('tags', [])
                    formatted_items.append({'name': item_name, 'tradable': item_tradable, 'tags': item_tags})

            print(formatted_items)

            # Вывод данных с отступами
            print("Data\n")
            print(data)


            # Вывод данных с отступами
            print("\nFormatted items\n")
            for item in formatted_items:
                print(item)

            return JsonResponse({'items': formatted_items})
        else:
            print("Ошибка в статус коде 200")
            return JsonResponse({'error': 'Failed to fetch inventory data from Steam'}, status=500)

    print("Общая ошибка")
    return JsonResponse({'error': 'Failed to get inventory data from Steam'}, status=500)



def logout_view(request):
    # Выполняем выход пользователя из сессии
    # Удаляем данные о пользователе из сессии
    if 'user_data' in request.session:
        print("Сессия до удаления user_data")
        print(request.session)
        request.session.modified = True

        del request.session['user_data']
        print("Сессия до удаления user_data")
        print(request.session)
        print("Пользователь был удалён (сессия)")
        logout(request)

    return JsonResponse({'message': 'User has been logged out successfully.'})


def discrod(request):
    return render(request, 'main/join_discord.html')
