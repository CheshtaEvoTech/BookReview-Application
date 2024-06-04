const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/reviewController");

router.get("/:bookId", reviewController.getAllReviewsForBook);
router.post("/", reviewController.submitReview);

module.exports = router;
