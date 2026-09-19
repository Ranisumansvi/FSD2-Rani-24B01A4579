const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");

const mongoose = require("mongoose");

const dbURI =
  "mongodb+srv://ranisumansvimendu_db_user:YOUR_NEW_PASSWORD@cluster0.qvflrmx.mongodb.net/CampusLostFoundDB?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to MongoDB Atlas successfully!");
  })
  .catch((err) => {
    console.log("Database connection error:", err);
  });