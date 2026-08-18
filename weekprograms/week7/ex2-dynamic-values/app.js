const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {

    const student = {
        name: "Rani",
        course: "AI & Data Science",
        age: 20
    };

    res.render("index", { student: student });
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});