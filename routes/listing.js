const express = require("express");
const router = express.Router();
const listingController = require("../controllers/listing");

// Listing Routes
router.get("", listingController.getListings);
router.get("/", listingController.getListings);
router.post("/save", listingController.saveListing);

            

module.exports = router;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                