const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const auth = require ("./auth");

// API Routes
router.use("/api", apiRoutes);


// If no API routes are hit, send the React app
router.use(function(req, res) {
  // console.log('sending html file **************', req.path)
  res.sendFile(path.join(process.cwd(), "./client/build/index.html"));
});

module.exports = router;