# Generated by Django 2.0 on 2018-09-28 12:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0023_batch'),
    ]

    operations = [
        migrations.AddField(
            model_name='batch',
            name='project',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='batch', to='api.Project'),
        ),
    ]
