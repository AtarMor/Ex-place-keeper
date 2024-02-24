'use strict'

function onInit() {
    renderUserPrefs()
}

function renderUserPrefs() {
    const userPrefs = getUserPrefs()

    const elBody = document.querySelector('body')
    const elBirth = document.querySelector('.birth span')

    elBody.style.color = userPrefs.txtColor
    elBody.style.backgroundColor = userPrefs.bgColor
    elBirth.innerText = userPrefs.birthDate + ' ' + userPrefs.birthTime
}