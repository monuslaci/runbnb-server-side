const Listing = require("../models/listing");
const User = require("../models/user");

//All listings 
exports.getListings = (req, res, next) => {
  Listing.find()
    .then((listing) => {
      res.send(listing);
    })
    .catch((err) => {
      console.log(err);
    });

};


//All listings of a given user
exports.getAllListingOfUser = async (req, res, next) => {
  const userId = req.params.userId;

  //const listingList = await User.findById(userId).populate("listing");
   const listingList = await Listing.find({userId: userId})
  console.log(listingList);

  if (!listingList) {
    res.status(500).json({
      success: false,
      message: "Listings of user cannot be retreived."
    });
  }
  res.send(listingList);
}




exports.saveListing = async (req, res, next) => {
  const title = req.body.title;
  const userId = req.body.userId;
  const saleOrRent = req.body.saleOrRent;
  const status = "inactive";
  const address = req.body.address;
  const image = req.body.image;
  const description = req.body.description;
  const propertyType = req.body.propertyType;
  const accessibility = req.body.accessibility;

  const price = req.body.price;
  const commonCost = req.body.commonCost;
  const utilities = req.body.utilities;

  const landSize = req.body.landSize;
  const size = req.body.size;
  const bedrooms = req.body.bedrooms;
  const livingroom = req.body.livingroom;
  const balcony = req.body.balcony;
  const floor = req.body.floor;
  const elevator = req.body.elevator;
  const view = req.body.view;
  const garage = req.body.garage;
  const ac = req.body.ac;
  const heating = req.body.heating;
  const furnished = req.body.furnished;
  const condition = req.body.condition;
  const features = req.body.features;


  const listing = new Listing({
    title: title,
    userId: userId,
    saleOrRent: saleOrRent,
    status: status,
    address: address,
    image: image,
    description: description,
    propertyType: propertyType,
    accessibility: accessibility,

    price: price,
    commonCost: commonCost,
    utilities: utilities,

    landSize: landSize,
    size: size,
    bedrooms: bedrooms,
    livingroom: livingroom,
    balcony: balcony,
    floor: floor,
    elevator: elevator,
    view: view,
    garage: garage,
    ac: ac,
    heating: heating,
    furnished: furnished,
    condition: condition,
    features: features
  });


  await listing
    .save()
    .then((result) => {
      console.log(result);
      if (result) {
        return res.status(200).json({
          success: true,
          message: "Listing '" + listing.title + "' is saved!",
          id: listing._id
        })
      } else {
        return res.status(404).json({
          success: false,
          message: "Listing could not be saved!"
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });

};


//update listing with image 
exports.imageUpload = async (req, res, next) => {

  const listingSearch = await Listing.findById(req.params.id);
  if (!listingSearch) return res.status(400).send("Invalid listing!");

  console.log("Listing to be updated: " + listingSearch);

  const files = req.file;
  if (!files) return res.status(400).send('No image in the request')
  console.log(req.files);
  let fileName = files.filename;
  let basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
  console.log("basePath: " + `${basePath}${fileName}`);


  const newListing = await Listing.findByIdAndUpdate(
    req.params.id, { //second parameter is an object we want to update the found category to:
      image: `${basePath}${fileName}`, //add the full path of the image + the image name: "http://localhost:3000/public/uploads/image-2323232"
      ac: true
    },
    //there is an option if I want to get back the new or the original data
    {
      new: true
    }
  );

  if (!newListing) { //if there was a problem, and there is no category 
    res.status(500).json({
      success: false,
      message: "The listing cannot be updated."
    });
  }

  res.send(newListing);
}

exports.saveListingWithImage = async (req, res, next) => {
  //  console.log(req.file)
  //  console.log(req.file.filename)

  const file = req.file;
  if (!file) return res.status(400).send('No image in the request')
  let fileName = file.filename;
  let extension = file.extension;

  console.log("fileName: " + fileName);
  console.log("extension " + extension);
  let basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;



  const title = req.body.title;
  console.log("title: " + title)

  const userId = req.body.userId;
  const saleOrRent = req.body.saleOrRent;
  const status = "inactive";
  const address = req.body.address;
  const image = `${basePath}${fileName}`;
  const description = req.body.description;
  const propertyType = req.body.propertyType;
  const accessibility = req.body.accessibility;

  const price = req.body.price;
  const commonCost = req.body.commonCost;
  const utilities = req.body.utilities;

  const landSize = req.body.landSize;
  const size = req.body.size;
  const bedrooms = req.body.bedrooms;
  const livingroom = req.body.livingroom;
  const balcony = req.body.balcony;
  const floor = req.body.floor;
  const elevator = req.body.elevator;
  const view = req.body.view;
  const garage = req.body.garage;
  const ac = req.body.ac;
  const heating = req.body.heating;
  const furnished = req.body.furnished;
  const condition = req.body.condition;
  const features = req.body.features;

  const listing = new Listing({
    title: title,
    userId: userId,
    saleOrRent: saleOrRent,
    status: status,
    address: address,
    image: image,
    description: description,
    propertyType: propertyType,
    accessibility: accessibility,
    price: price,
    commonCost: commonCost,
    utilities: utilities,

    landSize: landSize,
    size: size,
    bedrooms: bedrooms,
    livingroom: livingroom,
    balcony: balcony,
    floor: floor,
    elevator: elevator,
    view: view,
    garage: garage,
    ac: ac,
    heating: heating,
    furnished: furnished,
    condition: condition,
    features: features
  });


  await listing
    .save()
    .then((result) => {
      console.log(result);
      if (result) {
        return res.status(200).json({
          success: true,
          message: "Listing '" + listing.title + "' is saved!",
          id: listing._id
        })
      } else {
        return res.status(404).json({
          success: false,
          message: "Listing could not be saved!"
        })
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

//alap képfeltöltés ellenőrzések nélkül ->csak hogy meglegyen egyelőre
exports.images = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send("Something went wrong!");
      console.log(err)
    }
    res.send(req.file);
  });
};