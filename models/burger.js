var burger = require("../config.orm.js");

orm.selectAll("burger_name", "burgers");

orm.insertOne("burger_name", "burgers");

orm.updateOne("burger_name", "burgers");

module.exports = burger;