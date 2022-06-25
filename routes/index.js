const express = require('express');
const passport = require('passport');
const router = express.Router();


router.get('/', (req, res, next)=>{
    res.redirect('/listed')
})

router.get('/listed', (req, res)=>{
    res.render('index.ejs')
})

router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
))

router.get('/oauth2/redirect/google', passport.authenticate(
    'google',
    {
        successRedirect: '/listed/biglist',
        failureRedirect: '/listed'
    }
))

router.get('/listed/logout', (req, res) => {
    req.logOut()
    res.redirect('/listed')
})

module.exports = router