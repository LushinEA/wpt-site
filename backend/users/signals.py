from django.db.models.signals import post_migrate
from django.db import transaction
from django.contrib.auth.models import Group, Permission
from django.dispatch import receiver
from django.contrib.contenttypes.models import ContentType
from users.models import User

@receiver(post_migrate)
def create_default_groups(sender, **kwargs):
    def do_it():
        user_content_type = ContentType.objects.get_for_model(User)
        permissions = Permission.objects.filter(content_type=user_content_type)

        if not permissions.exists():
            print("⚠ Permissions for User model still not created, skipping this cycle...")
            return

        # Создаём группы если их нет
        admin_group, _ = Group.objects.get_or_create(name='Администратор')
        chief_group, _ = Group.objects.get_or_create(name='Начальник автоколонны')
        logistic_group, _ = Group.objects.get_or_create(name='Специалист логистики')
        accountant_group, _ = Group.objects.get_or_create(name='Специалист учета')

        # Админам все права
        admin_group.permissions.set(permissions)

        try:
            view_perm = Permission.objects.get(codename='view_user')
            chief_group.permissions.set([view_perm])
            logistic_group.permissions.set([view_perm])
            accountant_group.permissions.set([view_perm])
        except Permission.DoesNotExist:
            print("⚠ view_user permission does not exist yet.")

    transaction.on_commit(do_it)
