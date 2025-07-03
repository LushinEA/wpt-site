from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    class Role(models.TextChoices):
        ADMIN = 'ADMIN', 'Администратор'
        CHIEF = 'CHIEF', 'Начальник автоколонны'
        LOGISTICIAN = 'LOGISTICIAN', 'Специалист логистики'
        ACCOUNTANT = 'ACCOUNTANT', 'Специалист учета'

    role = models.CharField(max_length=20, choices=Role.choices)
