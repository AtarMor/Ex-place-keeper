'use strict'

const USER_DB = 'userDb'

const user = {
    email: '',
    txtColor: '',
    bgColor: '',
    birthDate: '',
    birthTime: ''
}

function getUserPrefs() {
    return user
}

function setColor(name, color) {
    if (name === 'txt-color') user.txtColor = color
    else if (name === 'bg-color') user.bgColor = color
    saveToStorage(USER_DB, user)
}