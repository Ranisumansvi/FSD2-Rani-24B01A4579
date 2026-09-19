"use strict";
var Bank;
(function (Bank) {
    // Private variable
    const minimumBalance = 500;
    // Exported function
    function isValidBalance(balance) {
        return balance >= minimumBalance;
    }
    Bank.isValidBalance = isValidBalance;
    function calculateInterest(amount, rate) {
        return (amount * rate) / 100;
    }
    Bank.calculateInterest = calculateInterest;
    // Nested namespace
    let Account;
    (function (Account) {
        function getAccountType(balance) {
            if (balance >= 100000)
                return "Premium";
            if (balance >= 50000)
                return "Gold";
            return "Regular";
        }
        Account.getAccountType = getAccountType;
    })(Account = Bank.Account || (Bank.Account = {}));
})(Bank || (Bank = {}));
// ---------- Using Namespace ----------
let balance = 75000;
console.log(Bank.isValidBalance(balance));
console.log(Bank.calculateInterest(75000, 5));
console.log(Bank.Account.getAccountType(balance));
