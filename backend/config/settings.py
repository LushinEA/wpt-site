DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'wpt_db',
        'USER': 'wpt_user',
        'PASSWORD': 'wpt_password',
        'HOST': 'db',  # <--- важно!
        'PORT': '5432',
    }
}

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'users'
    # + приложения
]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],  # если хочешь, можешь здесь указать свои директории шаблонов
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',  # обязательно
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',  # обязательно
    'django.contrib.messages.middleware.MessageMiddleware',     # обязательно
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]



ALLOWED_HOSTS = ['*']

ROOT_URLCONF = 'config.urls'

AUTH_USER_MODEL = 'users.User'
