const { Sequelize } = require("sequelize");

// Set up database connection
const sequelize = new Sequelize("runbnb", "root", "20210106Mirko", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
