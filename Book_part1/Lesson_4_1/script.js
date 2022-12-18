'use strict';

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//**************
let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

// *************
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2;
        }
    }
}