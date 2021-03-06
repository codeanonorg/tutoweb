# Generated by Django 2.2.9 on 2020-06-04 22:04

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20200604_2200'),
    ]

    operations = [
        migrations.AlterField(
            model_name='homepage',
            name='content',
            field=wagtail.core.fields.StreamField([('rich_text', wagtail.core.blocks.RichTextBlock()), ('announce', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(verbose_name='titre')), ('image', wagtail.images.blocks.ImageChooserBlock(required=False)), ('content', wagtail.core.blocks.RichTextBlock(verbose_name='contenu'))]))], blank=True, null=True),
        ),
    ]
