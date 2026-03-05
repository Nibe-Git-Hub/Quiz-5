from django.urls import path
from . import views 
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('signup/', views.register_view, name='signup'),
    path('signin/', MyTokenObtainPairView.as_view(), name='signin'),
    path('conversation/', views.chat_view, name="conversation"),
    path('conversations/', views.conversation_list_view, name="conversation-list"),
    path('conversations/<str:pk>/', views.conversation_detail_view, name="conversation-detail"),
]