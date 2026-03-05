from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

import google.generativeai as genai

# Create your views here.

genai.configure(api_key="AIzaSyDYHmFttOctqnTU9HEvijS8SJKhR1uDZms")

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/',
        'api/signup/',
        'api/signin/',
        'api/conversation/',
        'api/conversations/',
        'api/conversations/<id>/',
    ]
    return Response(routes)  

@api_view(['POST'])
def register_view(request):
    return Response({'message': 'User registration endpoint'})

class MyTokenObtainPairView(TokenObtainPairView):
    pass

@api_view(['GET'])
def conversation_list_view(request):
    return Response(posts)

@api_view(['GET'])
def conversation_detail_view(request, pk):
    post = None
    for i in posts:
        if i['_id'] == str(pk):
            post = i
            break
    return Response(post)

@api_view(['POST'])
def conversation(request):
    try:
        model = genai.GenerativeModel('models/gemini-2.5-flash')
        
        user_message = request.data.get('message')
        
        if not user_message:
            return Response({'reply': 'No message received".'})

        response = model.generate_content(user_message)
        return Response({'reply': response.text})
        
    except Exception as e:
        print(f"Error details: {e}")
        return Response({'error': str(e)}, status=500)
    
