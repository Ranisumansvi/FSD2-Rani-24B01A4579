"use strict";
// Generic class
class Box {
    item;
    constructor(item) {
        this.item = item;
    }
    showItem() {
        return this.item;
    }
    updateItem(newItem) {
        this.item = newItem;
        console.log("Item updated successfully");
    }
}
// Number
const numberBox = new Box(50);
console.log(numberBox.showItem());
numberBox.updateItem(100);
console.log(numberBox.showItem());
// String
const nameBox = new Box("Rani");
console.log(nameBox.showItem());
nameBox.updateItem("Sumansvi");
console.log(nameBox.showItem());
// Array
const marksBox = new Box([85, 90, 95]);
console.log(marksBox.showItem());
marksBox.updateItem([90, 92, 98]);
console.log(marksBox.showItem());
