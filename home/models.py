from django.db import models


class Propertydatatable(models.Model):
 latitude = models.TextField()
 longitude = models.TextField()
 propertytype = models.TextField()
 offertype = models.TextField()
 title = models.TextField(blank=True, null=True)
 dateonline = models.DateTimeField()
 link = models.TextField(blank=True, null=True)
 price = models.FloatField()
 bedroomcount = models.IntegerField(blank=True, null=True)
 postalcode = models.IntegerField()
 street = models.TextField()
 box = models.TextField(blank=True, null=True)
 nethabitablesurface = models.DecimalField(max_digits=65535, decimal_places=65535, blank=True, null=True)
 buildingconstructionyear = models.IntegerField(blank=True, null=True)
 hasterrace = models.BooleanField(blank=True, null=True)
 hasgarden = models.BooleanField(blank=True, null=True)
 propertydata = models.TextField(blank=True, null=True)
 mongodbkey = models.TextField()
 number = models.TextField()

 class Meta:
  managed = False
  db_table = 'propertydatatable'