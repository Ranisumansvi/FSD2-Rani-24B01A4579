"use strict";
//Any programs
let value;
value = 10;
console.log(value);
value = "Rani Sumansvi";
console.log(value);
value = true;
console.log(value);
//Unknown programs
let data = "Rangasthalam";
if (typeof data === "string") {
    console.log(data.toUpperCase());
}
let num = 100;
if (typeof num === "number") {
    console.log(num + 50);
}
//Void programs
function displayName(name) {
    console.log("Name: " + name);
}
displayName("Rani");
function greet() {
    console.log("Hurrayy!");
}
greet();
//Never programs
function showError(message) {
    throw new Error(message);
}
//showError("Something went wrong!"); //Uncomment to see the error
function runForever() {
    while (true) {
        console.log("Running...");
    }
}
//runForever(); // Don't run, infinite loop
console.log("Never examples declared!");
