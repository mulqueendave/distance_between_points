


function getDistance() {
   var lat1 = document.getElementById("p1_lat").value;
   var lon1 = document.getElementById("p1_lon").value;
   var lat2 = document.getElementById("p2_lat").value;
   var lon2 = document.getElementById("p2_lon").value;

   var cord1 = new google.maps.LatLng(lat1, lon1);
   var cord2 = new google.maps.LatLng(lat2, lon2);

   var distance = google.maps.geometry.spherical.computeDistanceBetween(cord2, cord1);
   var distance_in_meters = Math.round(distance).toFixed(0);
   var distance_in_feet = Math.round(3.2808*distance_in_meters).toFixed(0);
   document.getElementById("distance_meters").innerHTML = distance_in_meters+" m";
   document.getElementById("distance_feet").innerHTML = distance_in_feet+" ft";

};



