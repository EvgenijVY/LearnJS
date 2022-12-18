'use strict';

let age = prompt('How old are you?');
alert(checkAge1(age));
alert(checkAge1(age));
function checkAge1(age) {
    return (age > 18) ? true: confirm('Родители разрешили?');
}

function checkAge2(age) {
    return age > 18 || confirm('Родители разрешили?');
}

// *********
alert(min(prompt('First number'), prompt('Second number')));
function min(a, b) {
    return (+a < +b) ? a : b;
}

// *********
let x = prompt('Input number');
let n = prompt('Input exponent');

if (isNatural(x) && isNatural(n)) {
    alert(pow(x, n));
} else {
    alert('You must input natural number!');
}

function isNatural(value) {
    return value == Number(value) && value % 1 == 0;
}

function pow(x, n){
    for (; n > 1 ;x *= x, n--);
    return x;
}