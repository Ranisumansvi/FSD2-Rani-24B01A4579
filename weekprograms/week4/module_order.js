import { DISCOUNT, DELIVERYCHARGE } from "./module_config.js";
export class Order {
    customer;
    amount;
    constructor(customer, amount) {
        this.customer = customer;
        this.amount = amount;
    }
    calculateBill() {
        let discount = this.amount * DISCOUNT;
        return this.amount - discount + DELIVERYCHARGE;
    }
    printBill() {
        console.log("------ Order Summary ------");
        console.log(`Customer : ${this.customer.name}`);
        console.log(`City     : ${this.customer.city}`);
        console.log(`Total    : ${this.calculateBill()}`);
    }
}
