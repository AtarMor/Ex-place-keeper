'use strict'

function onInit() {
    renderPlaces()
}

function renderPlaces() {
    const places = getPlaces()
    const strHTMLs = places.map(place => {
        return `<li> ${place.name}
                    <button onclick = "onRemovePlace('${place.id}')">X</button>
                    <button onclick="onShowPlace()">Go</button>
                </li>`
    })
    document.querySelector('.places-list span').innerHTML = strHTMLs.join('')
}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
}