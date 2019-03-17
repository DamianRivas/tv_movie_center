const router = require("express").Router();
const staticController = require("../controllers/staticController");

router.get("/", staticController.index);

module.exports = router;
