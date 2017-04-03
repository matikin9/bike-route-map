/*global $*/
/*global L*/

/*
 * Initialize Map
 */
L.mapbox.accessToken = 'pk.eyJ1IjoibWF0aWtpbjkiLCJhIjoiYjMyMjBjZTE4NWUxMDkxOWZjZjFjZWEzZTcxNDUxOTkifQ._ldFl3e17jCs7aWm6zMZ3Q';
var mymap = L.map('map-display').setView([34.04, -118.25], 13);
L.mapbox.styleLayer('mapbox://styles/matikin9/cim5bt1q100iy9jkpl7ff9d1h').addTo(mymap);

var gpx = 'data/Morning_Ride.gpx'; // URL to your GPX file or the GPX itself
new L.GPX(gpx, 
    {
        async: true,
        marker_options: {
            startIcon: L.ExtraMarkers.icon({
                icon: 'fa-bicycle',
                markerColor: 'green',
                shape: 'square',
                prefix: 'fa'
            }),
            endIcon: L.ExtraMarkers.icon({
                icon: 'fa-bicycle',
                markerColor: 'red',
                shape: 'square',
                prefix: 'fa'
            })
        }
    }).addTo(mymap);