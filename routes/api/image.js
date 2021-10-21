const router = require("express").Router();
const imageController = require("../../controllers/imageController");

router.route("/view").get(imageController.get);
router.route("/create").post(imageController.post);

module.exports = router;