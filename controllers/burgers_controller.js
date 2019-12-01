var express = require("../server.js");
var burger = require("../models/burger.js");

// Routes??
app.get("/", function(req, res) {
    connection.query("SELECT * FROM burgers:", function(err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.render("index", {burgers: data });
    });
});

app.post("/api/burgers", function(req, res) {
    connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.burger_name], 
    function(err,result) {
        if (err) {
            return res.status(500).end();
        }
        res.json({ id: result.newBurger });
    });
});

app.delete("/api/burgers/:id", function(req, res) {
    connection.query("DELETE FROM burgers WHERE id = ?", [req.params.id], 
    function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.stauts(200).end();
    });
});