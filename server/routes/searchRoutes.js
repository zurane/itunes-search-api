const express = require("express");
const {
  searchiTunes,
  authenticate,
} = require("../controllers/searchController");

const router = express.Router();

router.get("/search", authenticate, searchiTunes);

module.exports = router;
