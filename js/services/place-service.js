'use strict'

var gIdx = 101

var gPlaces
_createPlaces()

function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)
}

function addPlace(name, lat, lng, zoom) {
    const place = _createPlace(name, lat, lng, zoom)
    gPlaces.push(place)
}

function getPlaceById(placeId) {
    return gPlaces.find(place => place.id === placeId)
}

function _createPlaces() {
    gPlaces = [
        _createPlace('Pukis house', 32.1416, 34.831213),
        _createPlace('house', 32.4416, 34.931213),
        _createPlace('Eilat', 29.557669, 34.951923)
    ]
}

function _createPlace(name, lat, lng, zoom = 10) {
    return {
        id: gIdx++,
        lat,
        lng,
        name,
        zoom
    }
}