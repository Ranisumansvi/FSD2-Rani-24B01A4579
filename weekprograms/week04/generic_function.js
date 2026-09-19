"use strict";
// Returns the last element
function lastItem(items) {
    return items[items.length - 1];
}
// Wraps an item with its ID
function wrapItem(item) {
    return {
        data: item,
        id: Math.floor(Math.random() * 1000)
    };
}
// Strings
let names = ["Rani", "Priya", "Anu"];
console.log(lastItem(names));
// Numbers
let marks = [80, 90, 95];
console.log(lastItem(marks));
const student = {
    name: "Rani",
    age: 20
};
const wrappedStudent = wrapItem(student);
console.log(wrappedStudent.data.name);
console.log(wrappedStudent.id);
