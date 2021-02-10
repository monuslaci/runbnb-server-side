const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const sequelize = require("./util/database");
const userRoutes = require("./routes/user");

app.use(bodyParser.json());

// Enable Cross Orgin Requests
app.use((res, req, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/users", userRoutes);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
    app.listen(3030);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
