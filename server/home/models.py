from django.db import models
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel


class HomePage(Page):
    """Modele de la page d'accueil"""
    templates = "home/home_page.html"  # Localisation du template de la page d'accueil
    max_count = 1  # Pas besoin de plus d'une page d'accueil
    banner_title = models.CharField(max_length=100, blank=False, null=True)  # Champ Django...
    content_panels = Page.content_panels + [                                 # ... necessitant un content_panels pour l'éditer depuis le panel admin
        FieldPanel("banner_title") # Titre du champ d'édition
    ]

# class FlexiblePage(Page):
#     """Modele des page de type FlexiblePage"""
#     api_fields = [APIField("content")]
#     content_panels = Page.content_panels + [StreamFieldPanel("content")]
#     content = fields.StreamField(
#         [("rich_text", RichTextBlock()), ("fullsize_img", ImageChooserBlock()),]
#     )
