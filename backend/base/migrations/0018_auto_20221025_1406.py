# Generated by Django 3.2.8 on 2022-10-25 11:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0017_auto_20221022_2130'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='cat_id',
        ),
        migrations.AddField(
            model_name='product',
            name='category',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
