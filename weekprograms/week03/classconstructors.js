"use strict";
// Class Implementation with Constructors
class SpaceRover {
    // 1. Properties
    roverName;
    mission;
    batteryLevel;
    constructor(roverName, mission, batteryLevel) {
        this.roverName = roverName;
        this.mission = mission || "Surface Exploration";
        this.batteryLevel = batteryLevel || 100;
    }
    // 3. Methods
    displayDetails() {
        console.log("Rover Name:", this.roverName);
        console.log("Mission:", this.mission);
        console.log("Battery Level:", this.batteryLevel + "%");
    }
    rechargeBattery(units) {
        this.batteryLevel += units;
        console.log(`${this.roverName} recharged by ${units}%`);
    }
}
// 4. Using Properties and Methods Post Construction
// Object using first constructor
let rover1 = new SpaceRover("Explorer-X");
// Object using overloaded constructor
let rover2 = new SpaceRover("Galaxy-7", "Rock Collection", 70);
console.log("Rover 1");
rover1.displayDetails();
rover1.rechargeBattery(15);
console.log("Updated Battery:", rover1.batteryLevel + "%");
console.log("\nRover 2");
rover2.displayDetails();
rover2.rechargeBattery(20);
console.log("Updated Battery:", rover2.batteryLevel + "%");
