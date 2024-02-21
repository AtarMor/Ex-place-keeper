'use strict'

const gPlaces = [
    {id: '1p2', lat: 32.1416, lng: 34.831213, name: 'Pukis house'},
    {id: '1p3', lat: 32.4416, lng: 34.931213, name: 'house'}
]

function getPlaces() {
    return gPlaces
}

function removePlace(placeId) {
    const placeIdx = gPlaces.findIndex(place => place.id === placeId)
    gPlaces.splice(placeIdx, 1)
}