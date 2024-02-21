'use strict'

function onInit() {
    renderUserPrefs()
}

function renderUserPrefs() {
    const userPrefs = loadFromStorage(USER_DB)

    const elBody = document.querySelector('body')


    elBody.style.color = userPrefs.txtColor
    elBody.style.backgroundColor = userPrefs.bgColor
}

function onFieldFill(name, value) {
    updateUserPref(name, value)
}


