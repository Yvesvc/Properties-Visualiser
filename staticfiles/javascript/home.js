


window.onload = function () {

    //GetMarkers();
    initMap();

};

/*$(document).ready(function (e) {
    $.ajax({
        type: 'GET',
        url: '/addlevel',
        success: function (markers) {
            console.log("ajax succesdd");
            var result = markers.var1;
            console.log(result);
        }
    });
    });*/




function initMap()
{
    var map = new google.maps.Map
        (
        document.getElementById("map"),
        { center: { lat: 51.028222, lng: 4.480471 }, zoom: 15 }
        );

    var marker = new google.maps.Marker
        (
        { position: { lat: 51.028222, lng: 4.480471 }, map: map, title: 'Hello World!' }
    );
    console.log('initmap');
}

function GetMarkers() {
    var scripts = document.getElementsByTagName('script');
    var script = scripts[scripts.length - 1];
    var markers = script.getAttribute('test');
    this.console.log(markers);
}
