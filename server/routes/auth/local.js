/** AUTH local routes for user authentication */
//Node level imports
const express = require('express')
const passport = require('passport')

module.exports = function(){
    //Create a Router instance, so we can mount routes on that and pass it up higher in the imports.
    const Router = express.Router()
    //Allows the user to log into the application. Note, we're using the provided middleware from passport.
    Router.post('/login', passport.authenticate('local',{ failureRedirect: '/login' }), function(req, res){
        console.log('inside the post route local.js')
        res.json(req.user)
        res.redirect('/audition');
    })
    //Allows the user to log out.
    Router.get('/logout', function(req, res){
        debugger
        console.log('111@#$@#$@#$@#$ LOGOUT')
    //Passport attaches a helpful logout() function on the request object that we can use.
        req.logout();
        req.session.destroy(err => {
            if(err) {
                return res.status(400).send(err.message)
            }

            res.status(200).clearCookie('connect.sid', {path: '/'}).json({success:true})
        })
    })
    Router.post('./signup' ,passport.authenticate('local' , function(req, res) {
        console.log(req.user)
        res.render('successfully Registered');
        // res.json(req.user);
    }))

    app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }),
    function(req, res) {
        res.send(200)
    //res.redirect('/audition');
  });


    //Return the Router, since this has all the routes mounted on it and we have to user it higher up.
    return Router;
}