const express = require("express");

const Burger = require("../models/burger.js");

app = express();

app.get("api/burgers", function(req, res) {
    Burger.findAll().then(result=> {
        return res.json(result);
    } 
);

app.post("api/new", function(req, res) {
    burger = req.body
    Burger.create ({
        burger_name: burger.name
    }).then(result => {
        return res.json(result);
    })
});

app.put("api/:id?", function(req, res) {
    Burger.findOne({
        where: {
            id: req.params.id
        }
    }).then((result)=> {
        if(result){
            result.update(
                result.body.devour = 1
            )
            
        }
    })
});
})

module.exports = app;