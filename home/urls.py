from django.urls import path, include
from wagtail.core import urls as wagtail_urls

from home import views

app_name = "home"

urlpatterns = [
    path("", include(wagtail_urls)),
    path("profil/<slug:slug>", views.UserView.as_view(), name="profile")
]
