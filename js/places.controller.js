'use strict'

var gMap

function onInit() {
    renderPlaces()
    initMap()
}

function renderPlaces() {
    const places = getPlaces()
    const strHTMLs = places.map(place => {
        return `<li> ${place.name}
                    <button onclick = "onRemovePlace(${place.id})">X</button>
                    <button onclick="onPanToPlace(${place.id})">Go</button>
                </li>`
    })
    document.querySelector('.places-list span').innerHTML = strHTMLs.join('')
}

function onRemovePlace(placeId) {
    removePlace(placeId)
    renderPlaces()
}

function initMap(lat = 29.557669, lng = 34.951923) {

    const elMap = document.querySelector('.map')
    const mapOptions = {
        center: { lat, lng },
        zoom: 10
    }
    gMap = new google.maps.Map(elMap, mapOptions)

    gMap.addListener('click', ev => {
        const name = prompt('Place name?', 'Place 1')
        const lat = ev.latLng.lat()
        const lng = ev.latLng.lng()
        addPlace(name, lat, lng, gMap.getZoom())
        renderPlaces()
    })

    const markerOptions = {
        position: { lat, lng },
        gMap,
        title: 'Eilat'
    }
    const marker = new google.maps.Marker(markerOptions)
}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}