// Parent Class
class SmartDoor {

    // Public property
    public doorName: string = "Main Entrance";

    // Private property
    private password: number = 2026;

    // Protected property
    protected isLocked: boolean = true;

    // Public method
    public unlockDoor(enteredPassword: number): void {

        if (this.checkPassword(enteredPassword)) {
            this.isLocked = false;
            console.log("Door Unlocked Successfully");
        } else {
            console.log("Wrong Password");
        }
    }

    // Private method
    private checkPassword(enteredPassword: number): boolean {
        return this.password === enteredPassword;
    }
}

// Child Class
class SecurityDoor extends SmartDoor {

    public doorStatus(): void {

        if (this.isLocked) {
            console.log("Door Status: Locked");
        } else {
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