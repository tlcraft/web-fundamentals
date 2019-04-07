const geoElement = document.getElementById('geolocation-example');

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

const id = navigator.geolocation.watchPosition(success, error, options);