const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");

const uploadOptions = require("../helpers/pic-upload-options");




// Listing Routes
router.get("", listingController.getListings);
router.get("/", listingController.getListings);
router.post("/save", listingController.saveListing);
router.put("/uploadPicture/:id",  listingController.uploadPicture, uploadOptions.array('images',10));
router.post("/images", listingController.images);

//router.put("/uploadPicture/:id",  listingController.uploadPicture, upload.array());            



module.exports = router;

                                                                                                                                                                                                                                                                                                                                                                                                                                                               