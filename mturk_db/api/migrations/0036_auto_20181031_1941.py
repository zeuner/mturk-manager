# Generated by Django 2.0 on 2018-10-31 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0035_auto_20181028_1618'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assignment',
            name='status_external',
            field=models.IntegerField(choices=[(0, 'APPROVED'), (1, 'REJECTED'), (2, 'APPROVED_OVERRIDDEN')], null=True),
        ),
    ]
