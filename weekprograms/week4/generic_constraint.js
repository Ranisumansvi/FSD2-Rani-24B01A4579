"use strict";
// Interface with length property
// Generic Constraint
function showLength(item) {
    return item.length;
}
// Works
console.log(showLength("Ranisumansvi"));
console.log(showLength([10, 20, 30, 40]));
// Error
// showLength(100);
