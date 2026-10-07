const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// EJS setup
app.set("view engine", "ejs");

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Store tasks in memory
let todos = [];

// Home page
app.get("/", (req, res) => {
    res.render("index", { todos });
});

// Add task
app.post("/add", (req, res) => {
    const task = req.body.task;

    if (task && task.trim() !== "") {
        todos.push(task);
    }

    res.redirect("/");
});

// Delete task
app.get("/delete/:id", (req, res) => {
    const id = req.params.id;

    todos.splice(id, 1);

    res.redirect("/");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});