const Sequelize = require("sequelize");

var sequelize = new Sequelize("burgers_db", "root", "doDger$13", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
});
  
module.exports = sequelize;