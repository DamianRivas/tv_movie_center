const router = require("express").Router();
const searchController = require("../controllers/searchController.js");

router.get("/search", searchController.index);

module.exports = router;
