from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('ADMIN', 'Администратор'),
        ('HEAD', 'Начальник автоколонны'),
        ('LOGISTICS', 'Специалист логистики'),
        ('ACCOUNTANT', 'Специалист учета'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='LOGISTICS')
