var map;
var markers = [];

//Initialize Map
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

//For sale and for rent button
$("#for-sale-button").click(function(){

    if($( "#for-sale-button" ).hasClass( "forsale-forrent-button-blue" )){
    }
    else {
    $("#for-sale-button").toggleClass("forsale-forrent-button-grey forsale-forrent-button-blue");
    $("#for-rent-button").toggleClass("forsale-forrent-button-grey forsale-forrent-button-blue");

    deleteMarkers();

    $.ajax({
        type: 'GET',
        url: '/showpropertiesforsale',
        success: function (propertiesForSale) {
            propertiesForSale.forEach( placeMarker );
        }
    });

    }
});

$("#for-rent-button").click(function(){
    if($( "#for-rent-button" ).hasClass( "forsale-forrent-button-blue" )){
    }
    else {
    $("#for-sale-button").toggleClass("forsale-forrent-button-grey forsale-forrent-button-blue");
    $("#for-rent-button").toggleClass("forsale-forrent-button-grey forsale-forrent-button-blue");

    deleteMarkers();

    }
});

//Price ranger slider
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 800,
      values: [ 0, 800 ],
      slide: function( event, ui ) {
        $( "#price-range" ).val( "€" + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      }
    });

    $( "#price-range" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ) +
      " - " + $( "#slider-range" ).slider( "values", 1 ) );
  }
   );

$( "#slider-range" ).mouseup(function() {
    var minValue = $( "#slider-range" ).slider( "values", 0 );
    var maxValue = $( "#slider-range" ).slider( "values", 1 );

    $.ajax({
        type: 'GET',
        url: '/showpropertiesforsalefilteronprice',
        data: {minValue: minValue, maxValue: maxValue},
        success: function (propertiesForSale) {
            console.log("showing for sale properties filtered on price");

            deleteMarkers();
            propertiesForSale.forEach( placeMarker );

        }
    });

});





function initMap(propertiesForSale)
{
    map = new google.maps.Map (document.getElementById("map"),{ center: { lat: 51.028222, lng: 4.480471 }, zoom: 15 });
    var infowindow = new google.maps.InfoWindow();

    propertiesForSale.forEach( placeMarker );





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


    console.log('map initialized');
}

function placeMarker( propertyForSale ) {
        const marker = new google.maps.Marker({
          position : new google.maps.LatLng( parseFloat(propertyForSale['latitude']), parseFloat(propertyForSale['longitude']) ),
          label: 'K',
          title: propertyForSale['street'] + ' ' +  propertyForSale['number'] + ' ' + propertyForSale['box'] + '\n' + propertyForSale['price'],
          map : map
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', function(){
        infowindow.close(); // Close previously opened infowindow
        infowindow.setContent(SetContentPropertyForSale(propertyForSale));
        infowindow.open(map, marker);
    });

        }

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearMarkers() {
  setMapOnAll(null);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}


