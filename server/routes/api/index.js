const auditionRoutes = require("./auditions");
const testRoutes = require("./test");
const userRoutes = require("./user")
const express = require('express');
const router = require("express").Router();


router.use("/test", testRoutes);
router.use("/users", userRoutes);
router.use("/auditions", auditionRoutes);

module.exports = router;
