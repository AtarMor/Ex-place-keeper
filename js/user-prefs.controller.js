'use strict'

function onInit() {
    renderUserPrefs()
}

function renderUserPrefs() {
    const userPrefs = getUserPrefs()

    const elBody = document.querySelector('body')
    elBody.style.color = userPrefs.txtColor
    elBody.style.backgroundColor = userPrefs.bgColor
}

function mySubmit(ev) {
    ev.preventDefault();
    updateUserPref()
    renderUserPrefs()
}

function showAge(newVal) {
    document.getElementById('sAge').innerHTML = newVal
}
