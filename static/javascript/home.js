

$(document).ready(function (e) {
    $.ajax({
        type: 'GET',
        url: '/showpropertiesforsale',
        success: function (propertiesForSale) {
            console.log("ajax success");
            initMap(propertiesForSale)
        }
    });
});


function initMap(propertiesForSale)
{
    var map = new google.maps.Map (document.getElementById("map"),{ center: { lat: 51.028222, lng: 4.480471 }, zoom: 15 });
    var infowindow = new google.maps.InfoWindow();

    propertiesForSale.forEach( placeMarker );

    function placeMarker( propertyForSale ) {
        const marker = new google.maps.Marker({
          position : new google.maps.LatLng( parseFloat(propertyForSale['latitude']), parseFloat(propertyForSale['longitude']) ),
          label: 'K',
          title: propertyForSale['street'] + ' ' +  propertyForSale['number'] + ' ' + propertyForSale['box'] + '\n' + propertyForSale['price'],
          map : map
        });

        google.maps.event.addListener(marker, 'click', function(){
            infowindow.close(); // Close previously opened infowindow
            infowindow.setContent(SetContentPropertyForSale(propertyForSale));
            infowindow.open(map, marker);
        });

    function SetContentPropertyForSale(propertyForSale) {
        var address = 'Adres: ' + propertyForSale['street'] + ' ' + propertyForSale['number'] + ' ' + propertyForSale['box'];
        var price =  'Prijs: ' + propertyForSale['price'];
        var nethabitablesurface = 'Bewoonbare oppervlakte: ' + propertyForSale['nethabitablesurface'];
        var buildingconstructionyear =  'Bouwjaar: ' + propertyForSale['buildingconstructionyear'];
        var bedroomcount =  'Aantal slaapkamers: ' + propertyForSale['bedroomcount'];
        var hasterrace =  'Terras: ' + propertyForSale['hasterrace'];
        var hasgarden =  'Tuin: ' + propertyForSale['hasgarden'];
        return address  + '<br>' + price+ '<br>' + nethabitablesurface+ '<br>' + buildingconstructionyear+ '<br>' + bedroomcount+ '<br>' + hasterrace+ '<br>' + hasgarden
    }
   }





    console.log('map initialized');
}


