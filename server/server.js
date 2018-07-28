const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes")
const bodyParser = require("body-parser");
const cors = require('cors');

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/audition'
const connection = mongoose.createConnection(connectionString)
const models = require('./models')(connection)
const session = require('express-session')
const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const authentication = require('./libraries/authentication')(connection)
const middleware = require('./libraries/middleware')

const fileUpload = require('express-fileupload');


//requiring dotenv so we can use a .env file
require("dotenv").config();

//setting port variable
const PORT = process.env.PORT || 3001;
process.env.NODE_ENV = process.env.NODE_ENV || "development";

//setting express variable
const app = express();
app.use(cors()); //enabled cors

//telling express to use bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//session give you the ability to mange users by using coockies or JWT
app.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())



// Passport handels user object and passing the functions in the libraries folder  
passport.use(new localStrategy(authentication.authenticateUser))
passport.serializeUser(authentication.serializeUser)
passport.deserializeUser(authentication.deserializeUser)



// passport.use('local-signup', localSignupStrategy);
// passport.use('local-login', localLoginStrategy);


//configure custom database middleware to attach connection to all request objects
app.use(middleware.databaseHandler(models))



app.use(fileUpload());



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.use(routes);

//Initial setup for our MongoDB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/audition");

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});