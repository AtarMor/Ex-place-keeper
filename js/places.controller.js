'use strict'

var gMap
var gMarkers = []

function onInit() {
    renderPlaces()
    initMap()
    renderMarkers()
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
    renderMarkers()
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
        renderMarkers()
    })

}

function onPanToPlace(placeId) {
    const place = getPlaceById(placeId)
    gMap.setCenter({ lat: place.lat, lng: place.lng })
    gMap.setZoom(place.zoom)
}

function getPosition() {
    navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
}

function showLocation(position) {
    const { latitude: lat, longitude: lng } = position.coords
    initMap(lat, lng)
}

function handleLocationError(error) {
    var locationError = document.getElementById("locationError")

    switch (error.code) {
        case 0:
            locationError.innerHTML = "There was an error while retrieving your location: " + error.message
            break
        case 1:
            locationError.innerHTML = "The user didn't allow this page to retrieve a location."
            break
        case 2:
            locationError.innerHTML = "The browser was unable to determine your location: " + error.message
            break
        case 3:
            locationError.innerHTML = "The browser timed out before retrieving the location."
            break
    }
}

function renderMarkers() {
    const places = getPlaces()

    gMarkers.forEach(marker => marker.setMap(null))

    gMarkers = places.map(place => {
        return new google.maps.Marker({
            position: place,
            map: gMap,
            title: place.name
        })
    })
}
