'use strict'

function onInit() {
    renderUserPrefs()
}

function renderUserPrefs() {
    const userPrefs = loadFromStorage(USER_DB)

    const elBody = document.querySelector('body')
    const elLinks = document.querySelectorAll('a')


    elBody.style.color = userPrefs.txtColor
    elLinks[0].style.color = elLinks[1].style.color = userPrefs.txtColor
    elBody.style.backgroundColor = userPrefs.bgColor
}