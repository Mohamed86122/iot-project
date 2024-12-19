
# Create your models here.
from django.db import models
class Dht11(models.Model):
  temp = models.FloatField(null=True)
  hum = models.FloatField(null=True)
  dt = models.DateTimeField(auto_now_add=True,null=True)

class AlertConfig(models.Model):  # Nouveau modèle pour la configuration des seuils
    temp_min = models.FloatField(default=10)
    temp_max = models.FloatField(default=35)
    hum_min = models.FloatField(default=20)
    hum_max = models.FloatField(default=70)