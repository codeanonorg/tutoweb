from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class AnnouncementBlock(blocks.StructBlock):
    class Meta:
        verbose_name = 'Bloc Annonce'
        template = "home/blocks/announce.html"

    title = blocks.CharBlock(verbose_name='titre')
    image = ImageChooserBlock(required=False)
    content = blocks.RichTextBlock(verbose_name='contenu')
