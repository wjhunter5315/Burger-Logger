var sequelize = require("./sequelize.js");

var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM burgers";
        sequelize.query(queryString, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(newBurger) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (??)";
        sequelize.query(queryString, [newBurger], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(oldBurger, upBurger) {
        var queryString = "UPDATE burgers SET ?? WHERE ??";
        sequelize.query(queryString, [oldBurger, upBurger], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;