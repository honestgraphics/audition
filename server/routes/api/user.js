
/** AUTH local routes for user authentication */
//Node level imports
const express = require('express');
const passport = require('passport');
const router = express.Router()


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
    //Passport attaches a helpful logout() function on the request object that we can use.
    req.logout();
    res.json({ success: true })
});
router.post('/signup', passport.authenticate('local'), function (req, res) {
    if (!req.user) {
        throw new Error('user null');
      }
    console.log(req.body)
    // res.json(req.user);
    // res.json(req.user);
});

module.exports = router;