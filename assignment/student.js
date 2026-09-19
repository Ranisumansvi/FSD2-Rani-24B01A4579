"use strict";
class Student {
    id;
    name;
    course;
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }
    display() {
        console.log("Student Details");
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Course:", this.course);
    }
}
const s1 = new Student(101, "Rani", "AI&DS");
s1.display();
