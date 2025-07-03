from django.shortcuts import render
from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer

# Create your views here.

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing users."""

    queryset = User.objects.all()
    serializer_class = UserSerializer