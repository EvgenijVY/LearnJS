"use strict";

alert(ucFirst(prompt('Input string', '')));
function ucFirst(value) {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
}

// **************

alert(checkSpam(prompt('Input string', '')));
function checkSpam(value) {
    return value.toLowerCase().includes('viagra') || value.toLowerCase().includes('xxx');
}

// ***************
alert(truncate(prompt('Input string', ''), prompt('Input max lenght', '0')));

function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
}

alert(extractCurrencyValue(prompt('Input price:')));
// ************
function extractCurrencyValue(str) {
    return +str.slice(1);
}