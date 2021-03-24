require('dotenv').config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res, next) => {
  console.log("OK");
});

//routes
//Listing
const listingRoutes = require("./routes/listing");
app.use("/listings", listingRoutes);



// mongoose
//   .connect(
//     "mongodb+srv://runbnb:runbnb9876@runbnb.ffxee.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//   )
//   .then((result) => {
//     console.log(result);
//     app.listen(port);
//   })
//   .catch((err) => {
//     console.log(err);
//   });




mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "realtor"
})
.then((result) => {
  console.log("Database connection is ready.");
    console.log(result);
})
.catch((err) => {
  console.log(err);
})

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
})