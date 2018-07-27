
/** AUTH local routes for user authentication */
//Node level imports
const express = require('express');
const passport = require('passport');
const router = express.Router()


//Allows the user to log into the application. Note, we're using the provided middleware from passport.
router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
    console.log('inside the post route local.js')
    res.json(req.user)
    res.redirect('/audition');
});
//Allows the user to log out.
router.get('/logout', function (req, res) {
    //Passport attaches a helpful logout() function on the request object that we can use.
    req.logout();
    res.json({ success: true })
});
router.post('/signup', passport.authenticate('local', function (req, res) {
    console.log(req.user)
    res.render('successfully Registered');
    // res.json(req.user);
}));

module.exports = router;