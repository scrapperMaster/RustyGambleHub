import requests
from django.contrib.auth import logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.shortcuts import redirect, render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from main.models import UserProfile

STEAM_API_KEY = 'D5C54B21C2B3BBAFB8F5E3B9E5893A9C'  # Замените на свой Steam API ключ
STEAM_LOGIN_URL = 'https://steamcommunity.com/openid/login'
RETURN_TO_URL = 'http://127.0.0.1:8005/api/processlogin'

@csrf_exempt
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


@csrf_exempt
def steam_authenticate(request):
    print("Процесс Стим логин")
    steam_encoded_data = dict(request.GET)
    print(steam_encoded_data)

    openid_identity = steam_encoded_data.get('openid.identity', '')  # Получаем список URL-адресов
    steam_user_id = openid_identity[-1].split('/')[-1]  # Извлекаем последний элемент и разбиваем URL

    if not steam_user_id:
        return JsonResponse({'error': 'Failed to validate Steam login data. No fkin ID'}, status=400)

    # Проверяем SteamID пользователя с использованием Steam Web API
    response = requests.get(f'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key={STEAM_API_KEY}&steamids={steam_user_id}')

    if response.status_code == 200:
        print('Code 200')
        data = response.json()
        player_data = data.get('response', {}).get('players', [])

        if player_data:
            print('Player data - ok')
            player_data = player_data[0]
            username = player_data.get('personaname', '')
            avatar = player_data.get('avatarfull', '')

            # Создаем или получаем профиль пользователя, связанный с Steam аккаунтом
            user, created = User.objects.get_or_create(username=username)
            user_profile, profile_created = UserProfile.objects.get_or_create(user=user, steam_id=steam_user_id, username=username, avatar=avatar)
            request.session['steam_user_id'] = steam_user_id
            request.session['user_id'] = user.id  # Сохраняем ID пользователя в сессии

            print(f"Пользователь добавлен \n{user_profile} \n{user} \n{user_profile.steam_id}")

            return redirect('https://7935-87-117-53-115.ngrok-free.app/')  # Замените URL на ваш фронтенд

    return JsonResponse({'error': 'Failed to get user data from Steam API'}, status=500)


@login_required
def get_user_data(request):
    print("Получаем данные пользователя")
    steam_user_id = request.session.get('steam_user_id', None)
    if steam_user_id:
        try:
            user_profile = UserProfile.objects.get(steam_id=steam_user_id)
            # Возвращаем данные пользователя в формате JSON
            print("Возвращаем данные пользователя в формате JSON")
            return JsonResponse({
                'steam_id': user_profile.steam_id,
                # Дополнительные поля пользователя, если требуется
                'username': user_profile.username,
                'avatar': user_profile.avatar,
            })
        except UserProfile.DoesNotExist:
            return JsonResponse({'error': 'Пользователь не найден'}, status=404)

    return JsonResponse({'error': 'Пользователь не аутентифицирован'}, status=401)


def logout_view(request):
    logout(request)
    return JsonResponse({'message': 'User has been logged out successfully.'})



def discrod(request):
    return render(request, 'main/join_discord.html')
