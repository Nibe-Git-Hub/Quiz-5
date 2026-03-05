from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *


class RegisterSerializer:
    class Meta:
        model = User
        fields = ('username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

class MyTokenObtainPairSerializer:
    class Meta:
        model = User
        fields = ('username', 'password')

class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = '__all__'  

class ConversationSerializer(serializers.ModelSerializer):
    messages = MessageSerializer(many=True, read_only=True)

    class Meta:
        model = Conversation
        fields = '__all__'
    

