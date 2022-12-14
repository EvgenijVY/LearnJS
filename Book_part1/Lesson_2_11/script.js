'use strict';

let age = prompt('How old are you?', '0');

if (age >= 14 && age <= 90) {};

//**********************
if (!(age >= 14 && age <= 90)) {};
if (age <= 14 || age >= 90) {};

//**********************
let userName = prompt('Кто там?');
if (userName === 'Админ') {
    let userPassword = prompt('Пароль?');
    if (userPassword === 'Я главный') {
        alert('Здравствуйте!');
    } else if (userPassword === null || userPassword === '') {
        alert('Отменено')
    } else  {
        alert('Неверный пароль')
    }
} else if (userName === null || userName === '') {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}