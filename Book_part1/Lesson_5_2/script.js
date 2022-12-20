"use strict";

alert(+prompt('Number 1:') + +prompt('Number 2:'));

// **********

alert(readNumber());

function readNumber() {
    let value;
    do {
        value = prompt('Inpunt number');
    } while (!isFinite(value) && value);
    return value ? value : null;
}

// **********

alert((random(1, 5)));
alert((random(1, 5)));
alert((random(10, 15)));

function random(min, max) {
    return Math.random() * (max - min) + min;
}

// ********

// alert(Math.round(random(1, 25)));
// alert(Math.round(random(1, 25)));
// alert(Math.round(random(1, 25)));

alert(Math.round(random(1, 5)));
alert(Math.round(random(1, 5)));
alert(Math.round(random(1, 5)));

function ramdomTrue(min, max) {
    return Math.floor(Math.round() * (max + 1 - min) + min);
}
