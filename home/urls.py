from django.urls import path, re_path

from . import views
app_name = "home"

urlpatterns = [
    path('home', views.IndexView.as_view(), name = "home"),
]