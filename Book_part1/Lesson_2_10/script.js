'use strict';

let userInputJSName = prompt("What is official JS's name?", "I don't know...");
if (userInputJSName === 'ECMAScript') {
    alert("It's correct");
} else {
    alert("Don't know? ECMAScript!");
}

/****************/
let userInputNumber = prompt("Input number", 0);
if (userInputNumber < 0) {
    alert('-1');
} else if (userInputNumber > 0) {
    alert('1');
} else {
    alert('0');
}

/**************/
function f(a, b) {
    let result = (a + b < 4) ? 'little' : 'many';
}

/***************/
function f2(login) {
    let message = (login === 'Сотрудник') ? 'Привет' :
        (login === 'Директор') ? 'Здравствуйте' :
            (login === '') ? 'Нет логина' :
                '';
}