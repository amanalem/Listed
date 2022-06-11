const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').OAuth2Strategy
const User = require('../models/User');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function(accessToken, refreshToken, profile, cb){
        console.log('user successfully logged in with OAuth');

        User.findOne({ 'googleId': profile.id }, function(err, user){
            if (err) return cb(err);
            if (user) {
                return cb(null, user)
            } else {
                const newUser = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newUser.save(err => {
                    if (err) return cb(err);
                    return cb(null, newUser);
                });
            }
        });

    }
));


passport.serializeUser((student, done)=>{
    done(null, student.id)
})

passport.deserializeUser((id, done)=>{
    Student.findById(id, (err, student)=>{
        done(err, student)
    })
})