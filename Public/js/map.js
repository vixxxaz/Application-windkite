var imageUrl = './assets/riviera22.JPG'
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
var altText = 'image de angelo, kiter.';
var latLngBounds = L.latLngBounds([[40.503512, 22.807212], [40.507749, 22.786400]]);

//positions du  spot
var map = L.map('map').setView([40.494988, 22.817900] , 13);

//couche de la carte 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//marker de la position
var marker = L.marker([40.494988, 22.817900]).addTo(map);

//popup du marker
marker.bindPopup("<b>Plage de decollage</b><br> kite cotes mer.").openPopup();

//ajout de la zone de kite
var polygon = L.polygon([
    [40.495223, 22.817472],
    [40.487083, 22.816271],
    [40.490034, 22.791086]
]).addTo(map);


// affichage rose des vent
var north = L.control({position: "bottomright"});
north.onAdd = function(map) {
    var div = L.DomUtil.create("div", "info legend rose");
    div.innerHTML = '<img src="./assets/rose2.png">';
    return div;
}
north.addTo(map);


