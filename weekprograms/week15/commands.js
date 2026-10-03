// WEEK 15 - MongoDB Food Delivery Management System

// Create / Select Database
use foodDeliveryDB

// Create Collection
db.createCollection("orders")

// Insert Orders
db.orders.insertMany([
  {
    customer: "Riya",
    restaurant: "Spice Hub",
    food: "Biryani",
    amount: 320,
    status: "Delivered"
  },
  {
    customer: "Arjun",
    restaurant: "Pizza Point",
    food: "Pizza",
    amount: 450,
    status: "Preparing"
  },
  {
    customer: "Meena",
    restaurant: "Spice Hub",
    food: "Biryani",
    amount: 280,
    status: "Delivered"
  },
  {
    customer: "Karthik",
    restaurant: "Burger House",
    food: "Burger",
    amount: 220,
    status: "Delivered"
  },
  {
    customer: "Sneha",
    restaurant: "Pizza Point",
    food: "Pizza",
    amount: 520,
    status: "Cancelled"
  }
])

// ---------------- CRUD OPERATIONS ----------------

// CREATE
db.orders.insertOne({
  customer: "Anu",
  restaurant: "Spice Hub",
  food: "Fried Rice",
  amount: 250,
  status: "Preparing"
})

// READ
db.orders.find()

// UPDATE
db.orders.updateOne(
  { customer: "Anu" },
  { $set: { status: "Delivered" } }
)

// DELETE
db.orders.deleteOne({ customer: "Anu" })

// ---------------- MONGODB QUERIES ----------------

// Find delivered orders
db.orders.find({ status: "Delivered" })

// Limit - show only 3 orders
db.orders.find().limit(3)

// Sort - highest amount first
db.orders.find().sort({ amount: -1 })

// Sort - lowest amount first
db.orders.find().sort({ amount: 1 })

// Create Index
db.orders.createIndex({ customer: 1 })

// Display Indexes
db.orders.getIndexes()

// ---------------- AGGREGATION ----------------

// Restaurant-wise total orders
db.orders.aggregate([
  {
    $group: {
      _id: "$restaurant",
      totalOrders: { $sum: 1 }
    }
  }
])

// Restaurant-wise average order amount
db.orders.aggregate([
  {
    $group: {
      _id: "$restaurant",
      averageAmount: { $avg: "$amount" }
    }
  }
])

// Drop collection
// db.orders.drop()

// Drop database
// db.dropDatabase()