const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes")
//requiring dotenv so we can use a .env file
require("dotenv").config();

//setting up server to use busboy
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');

//setting port variable
const PORT = process.env.PORT || 3001;

//setting express variable
const app = express();

//telling express to use busboy
app.use(busboy());

//telling express to use bodyparser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//telling express to use busboy body parser
app.use(busboyBodyParser());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// A route file has been set up in the routes folder, it is set to either go to a matching route
// or to the react app if it doesn't reach any api routes.
app.use(routes);

//Initial setup for our MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/audition");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
