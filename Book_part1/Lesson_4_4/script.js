"use strict";

let calculator = {
    read() {
        this.firstNumber = +prompt('Input first number');
        this.secondNumber = +prompt('Input second number');
    },

    sum() {
        return this.firstNumber + this.secondNumber;
    },

    mul() {
        return this.firstNumber * this.secondNumber;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// **********
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
        return this;
    }
};