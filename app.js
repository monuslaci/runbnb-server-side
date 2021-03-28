//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })


const api = process.env.API_URL;
const app = express();




//Error handling
const errorHandler = require('./helpers/error-handler');

//Enable CORS
const cors = require("cors");
app.use(cors());
app.options("*", cors());


//--------Middleware-----
app.use(bodyParser.json());
//middleware for parsing bodies from URL
// app.use(bodyParser.urlencoded({
//   extended: true
// }));


//Serving static files in the public directory
app.use(express.static("public"));
//handle if there are any errors in the app or in the authentication
app.use(errorHandler);
//HTTP request logger
app.use(morgan("combined"));

var type = upload.any();
app.post('/pictures', type, function (req, res, next) {
  console.log(req.files)
  
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any

  next()
})
 


//Routes
app.get("/", (req, res, next) => {
  console.log("OK");
});

//Listing
const listingRoutes = require("./routes/listing");

app.use(`${api}/listings`, listingRoutes);

//User
const userRoutes = require("./routes/user");
app.use(`${api}/users`, userRoutes);




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