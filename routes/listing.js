const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");
const upload = require("../helpers/pic-upload-options");


// Listing Routes
router.get("", listingController.getListings);
router.get("/", listingController.getListings);
router.get("/getAllListingOfUser/:userId", listingController.getAllListingOfUser);
router.post("/saveListing", listingController.saveListing);
router.post("/saveListingWithImage", upload.single("image"), listingController.saveListingWithImage);

router.put("/imageUpload/:id", upload.single("image"), listingController.imageUpload);

//EZ Működik!
router.post("/images", listingController.images);

module.exports = router;
