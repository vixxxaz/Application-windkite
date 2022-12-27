//carte de la region de chalcidique

const mapCha = document.querySelector('#map-cha');

const pathCha = mapCha.querySelectorAll('.mapCha__image a');


//poyfill pour foreatch accessible partout
if (NodeList.prototype.forEach === undefined){
    NodeList.prototype.forEach = function (callback) {
        [].forEach.call(this, callback)
    }
}

const activeAreaCha = function (id) {
    mapCha.querySelectorAll('.is-active').forEach(function (item) {
        item.classList.remove('is-active')
    })
    if(id){
        document.querySelector("#region-" + id).classList.add('is-active'); 
    }
}

pathCha.forEach(function (pathCha) {
    pathCha.addEventListener('mouseenter', function () {
        var id = this.id.replace('region-', '');
        activeAreaCha(id)       
    })
})

mapCha.addEventListener('mouseover', function () {
    activeAreaCha()
})

