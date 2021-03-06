const Listing = require("../models/listing");

exports.getListings = (req, res, next) => {
  Listing.find()
    .then((listing) => {
      console.log("ALL THE LISTING FOR THIS USER" + listing);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.saveListing = (req, res, next) => {
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

    size: size,
    floor: floor,
    elevator: elevator,
    ac: ac,
  });

  listing
    .save()
    .then((result) => {
      console.log(result);
      res.json({ message: "Listing is saved" });
    })
    .catch((err) => {
      console.log(err);
    });
};
