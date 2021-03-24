const Listing = require("../models/listing");

exports.getListings = (req, res, next) => {
  Listing.find()
    .then((listing) => {
      // console.log("ALL THE LISTING FOR THIS USER" + listing);
      res.send(listing);
    })
    .catch((err) => {
      console.log(err);
    });
   
};




exports.saveListing = async (req, res, next) => {
  const title = req.body.title;
  const userId = req.body.userId;
  const saleOrRent = req.body.saleOrRent;
  const status = "disable";
  const address = req.body.address;
  const imageURLs = req.body.imageURLs;
  const discription = req.body.discription;
  const features = req.body.features;

  const price = req.body.price;
  const commonCost = req.body.commonCost;
  const utilities = req.body.utilities;

  const size = req.body.size;
  const numberOfRooms = req.body.numberOfRooms;
  const floor = req.body.floor;
  const elevator = req.body.elevator;
  const ac = req.body.ac;

  const listing = new Listing({
    title: title,
    userId: userId,
    saleOrRent: saleOrRent,
    status: status,
    address: address,
    imageURLs: imageURLs,
    discription: discription,
    features: features,
    price: price,
    commonCost: commonCost,
    utilities: utilities,
    numberOfRooms: numberOfRooms,
    size: size,
    floor: floor,
    elevator: elevator,
    ac: ac,
  });


  await listing
    .save()
    .then((result) => {
      console.log(result);
      if (result) {
      return res.status(200).json({
        success: true,
        message: "Listing '" + listing.title + "' is saved!"
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


exports.uploadPicture = async (req, res, next) => {
  const listingSearch = await Listing.findById(req.params.id);
  console.log(listingSearch);
  if (!listingSearch) return res.status(400).send("Invalid listing!");
  console.log(req.file);


  const file = req.file;
  if(!file) return res.status(400).send('No image in the request')

  const fileName = file.filename;
  const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;

  const newListing = await Listing.findByIdAndUpdate(
    req.params.id, { //second parameter is an object we want to update the found category to:
      imageURLs: `${basePath}${fileName}` //add the full path of the image + the image name: "http://localhost:3000/public/uploads/image-2323232"
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



