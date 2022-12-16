'use strict';

let angle;
do {
    let inputValue = prompt('Введите угол в радианах', '0');
    angle = calculateAngle(inputValue);
} while (angle === undefined)
if (angle !== null) {
    alert(angle);
}

function calculateAngle(countRadian) {
    if (countRadian === null) {
        return null;
    }

    if (Number(countRadian) != countRadian) {
        alert('Вводить нужно число!');
        return ;
    }

    let isNegative = countRadian < 0;
    countRadian = Math.abs(countRadian);

    let degrees = Math.trunc(countRadian * 180 / Math.PI);
    let remainder = countRadian * 180 / Math.PI - degrees;
    let minutes = Math.trunc(remainder * 60);
    let seconds = Math.round(remainder * 3600 - minutes * 60);
    return ((isNegative) ? '-' : '') + degrees + '°' + minutes + "'" + seconds + '"';
}