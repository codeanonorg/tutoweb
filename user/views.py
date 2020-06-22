from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy as reverse
from django.views.generic import FormView
from wagtail.admin.forms.auth import LoginForm


class SignupView(FormView):
    form_class = UserCreationForm
    template_name = "form_view_base.html"
    title = "Créer un compte"
    subtitle = f'Compte déjà créé ? <a href="{reverse("user:login")}">Connectez-vous ici</a> !'
    action = reverse("user:signup")
    method = "post"


class LoginView(FormView):
    form_class = LoginForm
    template_name = "form_view_base.html"
    title = "Se connecter"
    subtitle = f'Pas de compte ? <a href="{reverse("user:signup")}">Créez-vous un compte dès maintenant</a> !'
    action = reverse("user:signup")
    method = "post"
