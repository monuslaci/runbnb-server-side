const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const listingRoutes = require("./routes/listing");
const errorController = require("./controllers/error");

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  console.log("OK");
});

app.use("/listings", listingRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://runbnb:runbnb9876@runbnb.ffxee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log(result);
    app.listen(port);
  })
  .catch((err) => {
    console.log(err);
  });
