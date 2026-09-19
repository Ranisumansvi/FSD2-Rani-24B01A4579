"use strict";
class Student {
    studentId;
    name;
    constructor(id, name) {
        this.studentId = id;
        this.name = name;
    }
    display() {
        console.log("Student ID:", this.studentId);
        console.log("Student Name:", this.name);
    }
}
const student = new Student(1001, "Dhana lakshmi");
student.display();
// student.studentId = 2000; // Error
