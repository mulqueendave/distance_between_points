function initialize() {
   initMap();
}

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	zoom: 13,
	center: {lat: 51.507347, lng: -0.127782}  
	});
	var geocoder = new google.maps.Geocoder();
	document.getElementById('submit').addEventListener('click', function() {
	getDistance(map);
	});
}


function getDistance(map) {
   var lat1 = document.getElementById("p1_lat").value;
   var lon1 = document.getElementById("p1_lon").value;
   var lat2 = document.getElementById("p2_lat").value;
   var lon2 = document.getElementById("p2_lon").value;
   var time = document.getElementById("time").value;

   var cord1 = new google.maps.LatLng(lat1, lon1);
   var cord2 = new google.maps.LatLng(lat2, lon2);

   var distance = google.maps.geometry.spherical.computeDistanceBetween(cord2, cord1);
   var distance_in_meters = Math.round(distance).toFixed(0);
   var distance_in_feet = Math.round(3.2808*distance_in_meters).toFixed(0);
   var avg_speed_in_kph = Math.((time/60)/distance_in_meters)
   var avg_speed_in_mph = Math.((time/60)/distance_in_feet)
   document.getElementById("distance_meters").innerHTML = distance_in_meters+" m";
   document.getElementById("distance_feet").innerHTML = distance_in_feet+" ft";
   document.getElementById("avg_speed_kph").innerHTML = avg_speed_in_kph;
   document.getElementById("avg_speed_mph").innerHTML = avg_speed_in_mph;
	
   addMarker(cord1,map);
   addMarker(cord2,map);
   map.panTo(cord1);
   var bounds = new google.maps.LatLngBounds();
	bounds.extend(cord1);
	bounds.extend(cord2);
	map.fitBounds(bounds);

	var line = new google.maps.Polyline({
    path: [
        cord1, 
        cord2
    ],
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 5,
    map: map
});
};



function addMarker(coord,map) {
	var marker = new google.maps.Marker({
          position: coord,
          map: map
        });
};
