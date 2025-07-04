#!/bin/sh

echo "Выполняем миграции..."
python manage.py makemigrations --noinput
python manage.py migrate --noinput

echo "Запускаем сервер Django"
exec python manage.py runserver 0.0.0.0:8000
