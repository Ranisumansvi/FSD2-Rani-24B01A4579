import { Order } from "./module_order.js";
const customer = {
    name: "Ranisumansvi",
    city: "Hampi",
    premiumMembership: true
};
const order = new Order(customer, 9000);
order.printBill();
