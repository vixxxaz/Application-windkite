var angel = localStorage.getItem('wind');
var nea = localStorage.getItem('windNea');
var vorvou = localStorage.getItem('windVor');
var mindLo = localStorage.getItem('windMind');
var epano = localStorage.getItem('windEpa');


function isWorking(element, number, mini) {

    number = parseInt(number);
    
        if( number > mini){
            element.classList.add("is-working");
        } else {
            element.classList.remove("is-working");
            console.log(`Pas assez de vent : ${number} < ${mini}`);
        }
    
}

// Sélectionnez l'élément à mettre à jour
const elementAngelo = document.querySelector("#region-D5");
const elementNea = document.querySelector("#region-H9");
const elementVor = document.querySelector("#region-J11");
const elementEpa = document.querySelector("#region-D5");
const elementMind = document.querySelector("#region-D5");
const elementRiv = document.querySelector('#region-D5');



  
isWorking(elementAngelo, localStorage.getItem('wind'), 12);
isWorking(elementNea, localStorage.getItem('windNea'), 12);
isWorking(elementVor, localStorage.getItem('windVor'), 12);
isWorking(elementEpa, localStorage.getItem('windEpa'), 12);
isWorking(elementMind, localStorage.getItem('windMind'), 12);
isWorking(elementMind, localStorage.getItem('windRiv'), 12);
  