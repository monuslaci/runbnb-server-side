const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");

const uploadOptions = require("../helpers/pic-upload-options");



// Listing Routes
router.get("", listingController.getListings);
router.get("/", listingController.getListings);
router.post("/saveListing", listingController.saveListing);
router.post("/saveListingWithImage", listingController.saveListingWithImage);
router.post("/imageUpload/:id", listingController.imageUpload);


//EZ Működik!
router.post("/images", listingController.images);




module.exports = router;
