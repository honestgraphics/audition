/** AUTH local routes for user authentication */
//Node level imports
const express = require('express')
const passport = require('passport')

module.exports = function(){
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Allows the user to log into the application. Note, we're using the provided middleware from passport.
    Router.post('/login', passport.authenticate('local'), function(req, res){
        console.log('inside the post route local.js')
        res.json(req.user)
    })
    //Allows the user to log out.
    Router.get('/logout', function(req, res){
        //Passport attaches a helpful logout() function on the request object that we can use.
        req.logout();
        res.json({success: true})
    })
    Router.post('./signup' ,passport.authenticate('local.signup' , function(req, res) {
        console.log(req.user)
        res.json(req.user);
    }))
    //Return the Router, since this has all the routes mounted on it and we have to user it higher up.
    return Router;
}