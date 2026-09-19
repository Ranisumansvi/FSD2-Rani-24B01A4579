"use strict";
class Company {
    static companyName = "Tech Solutions";
    static employeeCount;
    constructor(count) {
        Company.employeeCount = count;
    }
    static display() {
        console.log(`Company: ${Company.companyName}`);
        console.log(`Employees: ${Company.employeeCount}`);
    }
}
const c = new Company(250);
Company.display();
