const auditionRoutes = require("./auditions");
const awsRoutes = require("./aws");

const testRoutes = require("./test");
const userRoutes = require("./user")
const express = require('express');
const router = require("express").Router();
const awsRoutes = require("./aws");


router.use("/test", testRoutes);
router.use("/users", userRoutes);
router.use("/auditions", auditionRoutes);

// Setting up audition routes
router.use("/aws", awsRoutes);

module.exports = router;
