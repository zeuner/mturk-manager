# Generated by Django 2.0 on 2018-08-18 21:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mturk_manager', '0022_auto_20180815_1108'),
    ]

    operations = [
        migrations.AlterField(
            model_name='m_project',
            name='block_workers',
            field=models.BooleanField(default=False),
        ),
    ]
