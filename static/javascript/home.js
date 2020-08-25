


window.onload = function () {

    //GetMarkers();
    //initMap();

};

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
    var map = new google.maps.Map (
        document.getElementById("map"),
        { center: { lat: 51.028222, lng: 4.480471 }, zoom: 15 }
        );

    for (i = 0, len = propertiesForSale.length; i < len; i++) {
        var marker = new google.maps.Marker (
            { position: { lat: parseFloat(propertiesForSale[i]['latitude']), lng: parseFloat(propertiesForSale[i]['longitude']) }, map: map, title: 'property!' }
        );
    }

    console.log('map initialized');
}

/*
function GetMarkers() {
    var scripts = document.getElementsByTagName('script');
    var script = scripts[scripts.length - 1];
    var markers = script.getAttribute('test');
    this.console.log(markers);
}
*/
