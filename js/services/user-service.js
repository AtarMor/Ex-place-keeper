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

function updateUserPref(name, value) {
    if (name === 'txt-color') user.txtColor = value
    else if (name === 'bg-color') user.bgColor = value
    else if (name === 'birth-date') user.birthDate = value
    else if (name === 'birth-time') user.birthTime = value
    saveToStorage(USER_DB, user)
}