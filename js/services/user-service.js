'use strict'

const USER_DB = 'userDb'

var gUser

function getUserPrefs() {
    gUser = loadFromStorage(USER_DB)
    if (!gUser && !gUser.length) {

        gUser = {
            email: '',
            txtColor: '',
            bgColor: '',
            birthDate: '',
            birthTime: '',
            age: 26,
        }
    }
    return gUser
}

function updateUserPref() {
    gUser.email = document.getElementById('email').value
    gUser.txtColor = document.getElementById('color').value
    gUser.bgColor = document.getElementById('bg-color').value
    gUser.birthDate = document.getElementById('birth-date').value
    gUser.birthTime = document.getElementById('birth-time').value
    gUser.age = document.getElementById('age').value

    saveToStorage(USER_DB, gUser)
}
