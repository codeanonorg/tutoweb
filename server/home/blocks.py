from wagtail.core import blocks
from wagtail.images.blocks import ImageChooserBlock


class AnnouncementBlock(blocks.StructBlock):
    class Meta:
        verbose_name = 'Bloc Annonce'

    title = blocks.CharBlock(verbose_name='titre')
    image = ImageChooserBlock()
    content = blocks.RichTextBlock(verbose_name='contenu')
