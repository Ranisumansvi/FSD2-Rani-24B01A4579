"use strict";
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
console.log("Addition:", MathOperations.add(10, 1));
console.log("Subtraction:", MathOperations.subtract(27, 24));
console.log("Multiplication:", MathOperations.multiply(22, 10));
console.log("Division:", MathOperations.divide(29, 5));
