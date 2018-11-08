# Generated by Django 2.0 on 2018-11-08 18:26

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0040_auto_20181108_1925'),
    ]

    operations = [
        migrations.AddField(
            model_name='template_worker',
            name='template_global',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='templates_used', to='api.Template_Global'),
        ),
        migrations.AlterField(
            model_name='template_worker',
            name='template_hit',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='templates_used', to='api.Template_HIT'),
        ),
    ]
