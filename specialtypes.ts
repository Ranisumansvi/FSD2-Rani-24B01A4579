//Any programs
let value: any;

value = 10;
console.log(value);

value = "Rani Sumansvi";
console.log(value);

value = true;
console.log(value);

//Unknown programs
let data: unknown = "Rangasthalam";

if (typeof data === "string") {
    console.log(data.toUpperCase());
}

let num: unknown = 100;

if (typeof num === "number") {
    console.log(num + 50);
}

//Void programs
function displayName(name: string): void {
    console.log("Name: " + name);
}

displayName("Rani");

function greet(): void {
    console.log("Hurrayy!");
}

greet();

//Never programs
function showError(message: string): never {
    throw new Error(message);
}

//showError("Something went wrong!"); //Uncomment to see the error

function runForever(): never {
    while (true) {
        console.log("Running...");
    }
}
//runForever(); // Don't run, infinite loop
console.log("Never examples declared!");