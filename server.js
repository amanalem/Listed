const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');

// load the env vars
require('dotenv').config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
// require('./config/googlePassport');
require('./config/database');


// require our routes


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(session({
  secret: "BIGSecret",
  resave: false,
  saveUninitialized: true
}))

app.use(function (req, res, next){
  res.locals.user = req.user;
  next();
})

app.use(passport.initialize());
app.use(passport.session());

// mount all routes

module.exports = app;
