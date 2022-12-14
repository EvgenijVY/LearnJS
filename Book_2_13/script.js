'use strict';

let numbers = '';
for (let i = 2; i < 11; i++) {
    if (i % 2 == 0) {
        numbers += i + ' ';
    }
}
alert(numbers);

//***************
let i = 0;
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

//***************
let inputNumber;
do {
    inputNumber = prompt('Input number greater than 100', '0');
} while (inputNumber <= 100 && inputNumber !== null);

//*************

const MIN_NUMBER = 2;
let inputN = prompt('Input N');
let primes = '';

next:
for (let i = MIN_NUMBER; i <= inputN; i++) {
    for (let j = 2; j <= i**0.5; j++) {
        if (i % j == 0) {
            continue next;
        }
    }
    primes += i + ' ';
}
alert(primes);