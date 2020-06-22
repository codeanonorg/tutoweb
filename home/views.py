from django.contrib.auth import get_user_model
from django.views.generic import DetailView


class UserView(DetailView):
    template_name = "home/user_view.html"
    model = get_user_model()
    slug_field = "username"
