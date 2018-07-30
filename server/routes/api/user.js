
/** AUTH local routes for user authentication */
//Node level imports
const express = require('express');
const passport = require('passport');
const router = express.Router()
// const db = require('../../models')
const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn

//Allows the user to log into the application. Note, we're using the provided middleware from passport.
router.post('/login', passport.authenticate('local', { successRedirect: '/audition', failureRedirect: '/login' }), function (req, res) {

    if (!req.user) {
        throw new Error('user null');
      }
    console.log('inside the post route local.js')
    res.json(req.user)
});


//Allows the user to log out.
router.get('/logout', function (req, res) {
    debugger
    console.log('@#$@#$@#$@#$ LOGOUT')
    //Passport attaches a helpful logout() function on the request object that we can use.
    req.logout();
    req.session.destroy(err => {
        if(err) {
            return res.status(400).send(err.message)
        }

        res.status(200).clearCookie('connect.sid', {path: '/'}).json({success:true})
    })
});
router.post('/signup',function (req, res) {

    console.log("in sign up***********************")
    req.connection.model('User').findOne( {username: req.body.username})
    .exec()
    .then( (user)=>{
        if(user){
            res.send('User already exist');
            res.redirect('/login');
        }else{
            req.connection.model('User')
            .create({username: req.body.username, 
                    password: req.body.password, 
                    firstname: req.body.firstname ,
                    lastname: req.body.lastname,
                    confirmpassword: req.body.confirmpassword
                }, (error, done)=>{
                    if(error){ console.log(error)}
                    res.sendStatus(200);
                
                });
        }
    }
        
    )
    console.log(req.body)
    // res.json(req.user);
    // res.json(req.user);
    
});

module.exports = router;