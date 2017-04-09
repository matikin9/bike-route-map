/*global $*/
/*global L*/

/*
 * Initialize Map
 */
L.mapbox.accessToken = 'pk.eyJ1IjoibWF0aWtpbjkiLCJhIjoiYjMyMjBjZTE4NWUxMDkxOWZjZjFjZWEzZTcxNDUxOTkifQ._ldFl3e17jCs7aWm6zMZ3Q';
var mymap = L.map('map-display').setView([34.04, -118.25], 13);
L.mapbox.styleLayer('mapbox://styles/matikin9/cim5bt1q100iy9jkpl7ff9d1h').addTo(mymap);

var gpx1 = 'data/Morning_Ride.gpx'; // URL to GPX file or the GPX itself
var gpx2 = 'data/Dtla_Long_Beach.gpx'

var greenBicycle = L.ExtraMarkers.icon({
    icon: 'fa-bicycle',
    markerColor: 'green',
    shape: 'square',
    prefix: 'fa'
});

var redBicycle = L.ExtraMarkers.icon({
    icon: 'fa-bicycle',
    markerColor: 'red',
    shape: 'square',
    prefix: 'fa'
});


// marker_options attributes can be "startIcon" or "startIconUrl"
new L.GPX(gpx1, 
    {
        async: true,
        polyline_options: {
            color: 'red',
            weight: 4,
            opacity: 0.25
        },
        marker_options: {
            startIcon: greenBicycle,
            endIcon: redBicycle
        }
    }).addTo(mymap);
    
new L.GPX(gpx2, 
    {
        async: true,
        polyline_options: {
            color: 'blue',
            weight: 4,
            opacity: 0.25
        },
        marker_options: {
            startIcon: greenBicycle,
            endIcon: redBicycle
        }
    }).addTo(mymap);