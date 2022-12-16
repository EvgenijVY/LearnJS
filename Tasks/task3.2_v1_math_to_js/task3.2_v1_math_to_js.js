'use strict';

let i = 1;
for (let doubleFactorial = 1; Number.isSafeInteger(doubleFactorial); doubleFactorial *= 2*i++);
alert(i-2);