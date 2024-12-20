# Generated by Django 4.2 on 2024-12-19 20:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DHT', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='AlertConfig',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('temp_min', models.FloatField(default=10)),
                ('temp_max', models.FloatField(default=35)),
                ('hum_min', models.FloatField(default=20)),
                ('hum_max', models.FloatField(default=70)),
            ],
        ),
    ]
