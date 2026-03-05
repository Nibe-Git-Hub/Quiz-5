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
        {
            'Endpoint': '/chat/',
            'method': 'POST',
            'body': {'message': ""},
            'description': 'Generates a response based on the user message using Gemini-2.5-Flash model.'
        },
    ]
    return Response(routes)

@api_view(['POST'])
def chat_view(request):
    try:
        model = genai.GenerativeModel('models/gemini-2.5-flash')
        
        user_message = request.data.get('message')
        
        if not user_message:
            return Response({'reply': 'No message received.'})

        response = model.generate_content(user_message)
        return Response({'reply': response.text})
        
    except Exception as e:
        print(f"Error details: {e}")
        return Response({'error': str(e)}, status=500)
    
