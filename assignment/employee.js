"use strict";
class Employee {
    name;
    salary;
    department;
    constructor(name, salary, dept) {
        this.name = name;
        this.salary = salary;
        this.department = dept;
    }
    showSalary() {
        console.log("Salary:", this.salary);
    }
}
class Manager extends Employee {
    displayDepartment() {
        console.log("Department:", this.department);
    }
}
const emp = new Employee("Chittibabu", 50000, "HR");
console.log(emp.name);
emp.showSalary();
const mgr = new Manager("Sumansvi", 80000, "IT");
mgr.displayDepartment();
