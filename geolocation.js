document.addEventListener('DOMContentLoaded', function(event) {
    geoElement = document.getElementById('geolocation-example');
    id = navigator.geolocation.watchPosition(success, error, options);
});

let geoElement; 
let id;
const options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};

error = (error) => console.warn('ERROR(' + error.code + '): ' + error.message);
success = (position) => {
    var coordiates = position.coords;
    geoElement.innerHTML = 'Your coordinates are: ' + coordiates.latitude + ', ' + coordiates.longitude + '.';
    navigator.geolocation.clearWatch(id);
}