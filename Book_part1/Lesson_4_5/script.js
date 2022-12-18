"use strict";

let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавляет введённое пользователем значение к текущему значению
accumulator.read(); // прибавляет введённое пользователем значение к текущему значению

alert(accumulator.value); // выведет сумму этих значений

function Accumulator(startValue) {
    this.value = startValue;

    this.read = function () {
        this.value += +prompt('Input value', 0);
    }
}