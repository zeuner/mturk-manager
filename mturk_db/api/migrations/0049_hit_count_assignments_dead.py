# Generated by Django 2.0 on 2019-03-31 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0048_project_amount_budget_max'),
    ]

    operations = [
        migrations.AddField(
            model_name='hit',
            name='count_assignments_dead',
            field=models.IntegerField(default=0),
        ),
    ]
