# Generated by Django 2.0 on 2018-02-08 13:01

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mturk_manager', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='m_hit',
            name='datetime_creation',
            field=models.DateTimeField(default=datetime.datetime(2018, 2, 8, 14, 1, 16, 634520)),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='m_hit',
            name='datetime_expiration',
            field=models.DateTimeField(default=datetime.datetime(2018, 2, 8, 14, 1, 26, 762319)),
            preserve_default=False,
        ),
    ]
