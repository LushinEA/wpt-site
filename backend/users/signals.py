from django.db.models.signals import post_migrate
from django.contrib.auth.models import Group, Permission
from django.dispatch import receiver
from django.contrib.contenttypes.models import ContentType

@receiver(post_migrate)
def create_default_groups(sender, **kwargs):
    # Пример для пользователей
    admin_group, created = Group.objects.get_or_create(name='Администратор')
    chief_group, created = Group.objects.get_or_create(name='Начальник автоколонны')
    logistic_group, created = Group.objects.get_or_create(name='Специалист логистики')
    accountant_group, created = Group.objects.get_or_create(name='Специалист учета')

    # Зададим права
    # Для примера дадим им все права на пользователей
    from users.models import User
    user_content_type = ContentType.objects.get_for_model(User)
    permissions = Permission.objects.filter(content_type=user_content_type)

    # Админ — все права
    admin_group.permissions.set(permissions)

    # Начальник автоколонны — только просмотр пользователей
    view_perm = Permission.objects.get(codename='view_user')
    chief_group.permissions.set([view_perm])

    # Логистики — тоже только просмотр
    logistic_group.permissions.set([view_perm])

    # Учёт — тоже просмотр
    accountant_group.permissions.set([view_perm])
