from django.shortcuts import render
from django.http import HttpResponse
import json
from django.conf import settings


def index(request):
    markers = 'test'
    return render(request, 'home/home.html', {markers: markers})


def addlevel(request):
    if request.is_ajax():
        markers = {}
        markers['var1'] = 'valuevar2'
        return HttpResponse(json.dumps(markers), content_type='application/json')