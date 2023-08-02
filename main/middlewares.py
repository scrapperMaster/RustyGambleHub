from django.http import HttpResponse


def add_cors_headers(response):
    response['Access-Control-Allow-Origin'] = 'https://93f0-5-254-43-230.ngrok-free.app'  # Замените на URL вашего фронтенда
    response['Access-Control-Allow-Credentials'] = 'true'
    return response

class CorsMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        response = add_cors_headers(response)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        if request.method == 'OPTIONS':
            response = HttpResponse()
            response = add_cors_headers(response)
            return response

        return None