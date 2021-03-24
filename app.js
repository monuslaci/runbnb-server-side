require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const errorHandler = require('./helpers/error-handler');

const app = express();

//Enable CORS
app.use(cors());
app.options("*", cors());


//--------Middleware-----
app.use(bodyParser.json());
//middleware for parsing bodies from URL
app.use(bodyParser.urlencoded({
  extended: true
}));
//handle if there are any errors in the app or in the authentication
app.use(errorHandler);
//HTTP request logger
app.use(morgan("tiny"));



//Routes
app.get("/", (req, res, next) => {
  console.log("OK");
});

//Listing
const listingRoutes = require("./routes/listing");
app.use("/listings", listingRoutes);



//Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "realtor"
})
.then((result) => {
  console.log("Database connection is ready.");
   // console.log(result);
})
.catch((err) => {
  console.log(err);
})

//Server
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
})