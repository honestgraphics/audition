const auditionRoutes = require("./auditions");
const awsRoutes = require("./aws");

const testRoutes = require("./test");
const userRoutes = require("./user")
const express = require('express');
const router = require("express").Router();
const IsAuthenticated =  require('../auth/auth').IsAuthenticated



router.use("/test", testRoutes);
router.use("/users", userRoutes);
router.use("/auditions", IsAuthenticated, auditionRoutes);

// Setting up audition routes
router.use("/aws", IsAuthenticated, awsRoutes);

module.exports = router;
