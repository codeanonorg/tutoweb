# Generated by Django 2.2.9 on 2020-01-20 12:58

import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks
from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("home", "0003_auto_20200119_1955"),
    ]

    operations = [
        migrations.AlterField(
            model_name="flexiblepage",
            name="content",
            field=wagtail.core.fields.StreamField(
                [
                    ("rich_text", wagtail.core.blocks.RichTextBlock()),
                    ("fullsize_img", wagtail.images.blocks.ImageChooserBlock()),
                ]
            ),
        ),
        migrations.AlterField(
            model_name="homepage",
            name="content",
            field=wagtail.core.fields.StreamField(
                [
                    ("rich_text", wagtail.core.blocks.RichTextBlock()),
                    (
                        "announce",
                        wagtail.core.blocks.StructBlock(
                            [
                                (
                                    "title",
                                    wagtail.core.blocks.CharBlock(verbose_name="titre"),
                                ),
                                ("image", wagtail.images.blocks.ImageChooserBlock()),
                                (
                                    "content",
                                    wagtail.core.blocks.RichTextBlock(
                                        verbose_name="contenu"
                                    ),
                                ),
                            ]
                        ),
                    ),
                ]
            ),
        ),
        migrations.AlterField(
            model_name="homepage",
            name="subtitle",
            field=wagtail.core.fields.RichTextField(max_length=80),
        ),
    ]
