const router = require("express").Router();
const auditionRoutes = require("./auditions");

// Setting up audition routes
router.use("/auditions", auditionRoutes);

module.exports = router;
