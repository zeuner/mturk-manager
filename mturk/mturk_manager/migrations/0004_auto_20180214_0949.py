# Generated by Django 2.0 on 2018-02-14 08:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mturk_manager', '0003_auto_20180213_2308'),
    ]

    operations = [
        migrations.AlterField(
            model_name='m_worker',
            name='name',
            field=models.CharField(max_length=200),
        ),
    ]