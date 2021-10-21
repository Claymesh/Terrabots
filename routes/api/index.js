const router = require("express").Router();
const imageRoutes = require("./image");
const metadataRoutes = require("./metadata")

router.use("/image", imageRoutes);
router.use("/metadata", metadataRoutes);


module.exports = router