const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");
const multer = require("multer"); 

const storage = require("../helpers/pic-upload-options");

const upload = multer({
  dest: 'public/uploads'
}, {
  storage: storage
});

const uploadOptions = require("../helpers/pic-upload-options");

// Listing Routes
router.get("", listingController.getListings);
router.get("/", listingController.getListings);
router.post("/saveListing", listingController.saveListing);
router.post("/saveListingWithImage", listingController.saveListingWithImage);

router.post("/imageUpload/:id", upload.any() , listingController.imageUpload);

//EZ Működik!
router.post("/images", listingController.images);

module.exports = router;
