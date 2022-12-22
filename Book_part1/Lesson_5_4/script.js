"use strict";

let styles = ['Джаз'];
styles.push('Рок-н-ролл');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп','Регги');

// *********
alert(sumInput());

function sumInput() {
    let inputValue;
    let inputValueArray = [];
    while (true) {
        inputValue = prompt('Input number');
        if (isNaN(inputValue) || inputValue === '' || inputValue === null ) {
            break;
        }
        inputValueArray.push(+inputValue);
    }
    let sum = 0;
    for (let item of inputValueArray) {
        sum += item;
    }
    return sum;
}

//********************
function getMaxSubSum(arr) {
    let sum = 0;
    let maxSum = 0;
    for (let item of arr) {
        sum = (-item > sum) ? 0 : sum + item;
        maxSum = Math.max(sum, maxSum);
    }
    return maxSum;
}