"use strict";
class Box {
    value;
    constructor(data) {
        this.value = data;
    }
    display() {
        console.log("Stored Value:", this.value);
    }
}
const numberBox = new Box(500);
numberBox.display();
const stringBox = new Box("Hello TypeScript");
stringBox.display();
const booleanBox = new Box(true);
booleanBox.display();
