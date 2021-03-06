const router = require("express").Router();
const showController = require("../controllers/showController.js");

router.get("/tv/:id", showController.showTV);
router.get("/movie/:id", showController.showMovie);
router.get("/person/:id", showController.showPerson);

module.exports = router;
