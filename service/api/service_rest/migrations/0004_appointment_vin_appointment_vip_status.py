# Generated by Django 4.0.3 on 2023-09-08 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_delete_status_alter_appointment_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='vin',
            field=models.CharField(max_length=17, null=True),
        ),
        migrations.AddField(
            model_name='appointment',
            name='vip_status',
            field=models.BooleanField(default=False, null=True),
        ),
    ]
