"use strict";
class BankAccount {
    balance;
    constructor(amount) {
        this.balance = amount;
    }
    deposit(amount) {
        this.balance += amount;
        console.log("Deposited:", amount);
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Withdrawn:", amount);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    displayBalance() {
        console.log("Current Balance:", this.balance);
    }
}
const acc = new BankAccount(5000);
acc.deposit(1000);
acc.withdraw(2500);
acc.displayBalance();
