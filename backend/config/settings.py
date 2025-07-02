DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'wpt_db',
        'USER': 'wpt_user',
        'PASSWORD': 'wpt_password',
        'HOST': 'db',  # имя сервиса в docker-compose
        'PORT': 5432,
    }
}
