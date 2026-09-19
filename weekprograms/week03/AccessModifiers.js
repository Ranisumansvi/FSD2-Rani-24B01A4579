"use strict";
// Parent Class
class SmartDoor {
    // Public property
    doorName = "Main Entrance";
    // Private property
    password = 2026;
    // Protected property
    isLocked = true;
    // Public method
    unlockDoor(enteredPassword) {
        if (this.checkPassword(enteredPassword)) {
            this.isLocked = false;
            console.log("Door Unlocked Successfully");
        }
        else {
            console.log("Wrong Password");
        }
    }
    // Private method
    checkPassword(enteredPassword) {
        return this.password === enteredPassword;
    }
}
// Child Class
class SecurityDoor extends SmartDoor {
    doorStatus() {
        if (this.isLocked) {
            console.log("Door Status: Locked");
        }
        else {
            console.log("Door Status: Unlocked");
        }
    }
}
// Main Program
const door = new SmartDoor();
// Accessing public property
console.log("Door Name:", door.doorName);
// Public method
door.unlockDoor(2026);
// Wrong password
door.unlockDoor(1234);
// Child object
const security = new SecurityDoor();
security.doorStatus();
