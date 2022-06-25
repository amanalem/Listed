const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.redirect('/listed')
})

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
))

router.get('/oauth2callback', passport.authenticate(
    'google',
    {
        successRedirect: '/listed',
        failureRedirect: '/listed'
    }
))

router.get('/logout', (req, res) => {
    req.logOut()
    res.redirect('/listed')
})

module.exports = router