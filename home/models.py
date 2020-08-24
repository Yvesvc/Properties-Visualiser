from django.db import models

class tablename(models.Model):
 Address = models.TextField(null=True)
 Latitude = models.TextField(null=True)
 Longitude = models.TextField(null=True)
 PropertyType = models.TextField()
 OfferType = models.TextField()
 Price = models.FloatField(default = 0)
 Title = models.TextField()
 DateOnline = models.DateTimeField()
 Link = models.TextField()
 