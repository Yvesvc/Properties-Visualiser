from django.shortcuts import render
from django.http import HttpResponse
from .models import Propertydatatable
from django.db.models.query import QuerySet
import simplejson as json
from django.conf import settings


def index(request):
    markers = 'test'
    return render(request, 'home/home.html', {markers: markers})


def ShowPropertiesForSale(request):
    if request.is_ajax():
        propertiesForSale: list = []
        propertiesForSaleRecords: QuerySet = Propertydatatable.objects.filter(offertype="FOR_SALE")
        for propertiesForSaleRecord in propertiesForSaleRecords:
            propertyForSale: dict = {'longitude': propertiesForSaleRecord.longitude, 'latitude': propertiesForSaleRecord.latitude, 'price': propertiesForSaleRecord.price,
                                     'bedroomcount': propertiesForSaleRecord.bedroomcount, 'street': propertiesForSaleRecord.street, 'number': propertiesForSaleRecord.number, 'box': propertiesForSaleRecord.box,
                                     'nethabitablesurface': propertiesForSaleRecord.nethabitablesurface, 'buildingconstructionyear': propertiesForSaleRecord.buildingconstructionyear, 'hasterrace': propertiesForSaleRecord.hasterrace, 'hasgarden': propertiesForSaleRecord.hasgarden}
            propertiesForSale.append(propertyForSale)
        # markers = {}
        # markers['var1'] = 'valuevar2'

        return HttpResponse(json.dumps(propertiesForSale), content_type='application/json')

def ShowPropertiesForSaleFilterOnPrice(request):
    if request.is_ajax():
        minValue: int = int(request.GET.copy()['minValue']) * 1000
        maxValue: int = int(request.GET.copy()['maxValue']) * 1000

        propertiesForSale: list = []
        propertiesForSaleRecords: QuerySet = Propertydatatable.objects.filter(offertype="FOR_SALE").filter(price__gt = minValue).filter(price__lt = maxValue)

        for propertiesForSaleRecord in propertiesForSaleRecords:
            propertyForSale: dict = {'longitude': propertiesForSaleRecord.longitude, 'latitude': propertiesForSaleRecord.latitude, 'price': propertiesForSaleRecord.price,
                                     'bedroomcount': propertiesForSaleRecord.bedroomcount, 'street': propertiesForSaleRecord.street, 'number': propertiesForSaleRecord.number, 'box': propertiesForSaleRecord.box,
                                     'nethabitablesurface': propertiesForSaleRecord.nethabitablesurface, 'buildingconstructionyear': propertiesForSaleRecord.buildingconstructionyear, 'hasterrace': propertiesForSaleRecord.hasterrace, 'hasgarden': propertiesForSaleRecord.hasgarden}
            propertiesForSale.append(propertyForSale)

        return HttpResponse(json.dumps(propertiesForSale), content_type='application/json')