"use strict";
//Variable Annotations
let cusinename = "Paradise!";
let rating = 5;
let isDelicious = true;
//Function parameter and Return Type Annotations
function getReserved(title, stars) {
    return '${title} was serving a delicious food with rating of ${stars}.';
}
//Array Annotations
let foodmenu = [" Chicken Biryani", "Ghobi 65", "gulab jamun", "Mutton ghee roast"];
//Using the Annotated variables and functions
console.log("Cuisine Name:", cusinename);
console.log("Rating:", rating);
console.log("Is Delicious:", isDelicious);
console.log(getReserved(cusinename, rating));
console.log("Food Menu:");
for (let food of foodmenu) {
    console.log(food);
}
