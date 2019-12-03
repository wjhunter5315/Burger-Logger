// var orm = require("../config/orm.js");

// orm.selectAll("burgers", "burger_name");

// function eatBurger() {
//     orm.updateOne("burgers", "burger_name");
// }

// function insertBurger() {
//     orm.insertOne("burgers", "burger_name");

// $(function() {
//     $("#addBtn").on("click", function(event) {
//         event.preventDefault();
//         var newBurger = {burger_name: $("#burgName").val().trim()};
//         var id = $(this).data("id");

//         $.ajax("/api/burgers/" + id, {
//             tpye: "PUT",
//             data: newBurger
//         }).then(
//             function() {
//                 console.log("Burger Added");
//                 location.assign("/");
//             }
//         );
//     });

//     $("#devourBtn").on("click", function(event) {
//         event.preventDefault();
//         var burgerName = $(this).data("burger_name");
//         $.ajax("/api/burgers" + id, {
//             type: "DELETE"
//         }).then(
//             function() {
//                 console.log("Devoured ", burgerName);
//                 location.reload();
//             }
//         );
//     });
// });

// module.exports = orm;

const Sequelize = require("sequelize");

const sequelize = require("../config/sequelize.js");

const Burger = sequelize.define("burgers", {
    burger_name: Sequelize.STRING,
    devour: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0,
    }
},{});

Burger.sync();

module.exports = Burger;