const router = require("express").Router();
const auditionRoutes = require("./auditions");
const awsRoutes = require("./aws");

// Setting up audition routes
router.use("/auditions", auditionRoutes);

// Setting up audition routes
router.use("/aws", awsRoutes);

module.exports = router;
