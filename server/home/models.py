from wagtail.admin.edit_handlers import FieldPanel, StreamFieldPanel
from wagtail.api import APIField
from wagtail.core import fields
from wagtail.core.blocks import RichTextBlock
from wagtail.core.models import Page
from wagtail.images.blocks import ImageChooserBlock

from home import blocks


class HomePage(Page):
    default_slug = "home"
    content_panels = Page.content_panels + [
        FieldPanel("subtitle"),
        StreamFieldPanel("content"),
    ]
    api_fields = [APIField("subtitle"), APIField("content")]
    subtitle = fields.RichTextField(max_length=80)
    content = fields.StreamField(
        [("rich_text", RichTextBlock()), ("announce", blocks.AnnouncementBlock())]
    )


class FlexiblePage(Page):
    api_fields = [APIField("content")]
    content_panels = Page.content_panels + [StreamFieldPanel("content")]
    content = fields.StreamField(
        [("rich_text", RichTextBlock()), ("fullsize_img", ImageChooserBlock()),]
    )
