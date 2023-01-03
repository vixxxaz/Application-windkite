

fetch('https://api.open-meteo.com/v1/forecast?latitude=40.19&longitude=23.80&hourly=rain,windspeed_10m,winddirection_10m,windgusts_10m&daily=sunrise,sunset,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant&windspeed_unit=kn&timezone=auto')
.then(response => response.json())

.then(function(data) {weatherDisplay(data)})

.catch(err => console.error(err));

function weatherDisplay(data) {

console.log(data);

//ajout du nom de la ville
let title = 'live forecast' ;
let titleDi = document.createElement('h3');
document.getElementById('forecast').appendChild(titleDi).innerHTML = title;

//ajout du vent
let windGustArray = data.daily;   
console.table(windGustArray.windspeed_10m_max[0])
console.log(windGustArray)

const txtWind0 = windGustArray.windspeed_10m_max[0]
localStorage.setItem('windVor', txtWind0  )

let speed = document.createElement('p');
document.getElementById('windSpeed').appendChild(speed).innerHTML = 'Wind today at 10m altitude : ' + txtWind0 + ' knts'

//creer le tableau pour afficher les données
let html ='<table><tr><th>Date</th><th>Sunrise</th><th>Sunset</th><th>Max Wind Speed</th><th>Max Wind Gusts</th><th>Dominant Wind Direction in °</th></tr>';

//itere dans le tableau des prevision de la semaine
for (let i = 0 ; i < windGustArray.time.length ; i++) {

    //filtre l'heure du sunset dans le resultat de l api 22/01/2012T17:30
    const sunTime = (windGustArray.sunrise[i]).split("T");
    let hour = sunTime[1].substring(0,2);
    let min = sunTime[1].substring(3,5);
    //filtre les minutes
    const sunsetTime = (windGustArray.sunset[i]).split("T");
    let hourS = sunsetTime[1].substring(0,2);
    let minS = sunsetTime[1].substring(3,5);

    //creer un tableau des direction cardianle
    const cardinalDirections = [
        "N", "NNE", "NE", "ENE",
        "E", "ESE", "SE", "SSE",
        "S", "SSW", "SW", "WSW",
        "W", "WNW", "NW", "NNW"
      ];
      
    function degreesToCardinal(degrees) {
        const index = Math.round(degrees / 22.5);
        return cardinalDirections[index % 16];
      }
    

    html += '<tr>';
    html += `<td>${windGustArray.time[i]}</td>`;
    html += `<td>${hour + ':' + min}</td>`;
    html += `<td>${hourS + ':'+ minS}</td>`;
    html += `<td>${windGustArray.windspeed_10m_max[i]}</td>`;
    html += `<td>${windGustArray.windgusts_10m_max[i]}</td>`;
    html += `<td>${degreesToCardinal(windGustArray.winddirection_10m_dominant[i])}</td>`;
    html += '</tr>';
}

html += '</table>';

document.getElementById('table').innerHTML = html;

};
