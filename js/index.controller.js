'use strict'

function onInit() {
    renderUserPrefs()
}

function renderUserPrefs() {
    const userPrefs = loadFromStorage(USER_DB)

    const elBody = document.querySelector('body')
    const elLinks = document.querySelectorAll('a')
    const elBirth = document.querySelector('.birth span')

    elBody.style.color = userPrefs.txtColor
    elLinks[0].style.color = elLinks[1].style.color = userPrefs.txtColor
    elBody.style.backgroundColor = userPrefs.bgColor
    elBirth.innerText = userPrefs.birthDate + ' ' + userPrefs.birthTime
}