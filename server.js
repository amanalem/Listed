const express = require('express');
const path = require('path');
const logger = require('morgan');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override')


// const cssDirectoryPath = path.join(__dirname, './public/css');
// const scriptDirectoryPath = path.join(__dirname, './public/scripts');
// const cssDirectory = express.static(cssDirectoryPath);
// const scriptDirectory = express.static(scriptDirectoryPath);

const indexRoutes = require('./routes/index')
const subItemRoutes = require('./routes/subItemRoutes');
const itemRoutes = require('./routes/itemRoutes')
const bigListRoutes = require('./routes/bigListRoutes')



// load the env vars
require('dotenv').config();

// create the Express app
const app = express();

// connect to the MongoDB with mongoose
// require('./config/googlePassport');
require('./config/database');


// require our routes
// const userRoutes = require('./routes/userRoutes')
// const itemRoutes = require('./routes/itemRoutes')
// const subItemRoutes = require('./routes/subItemRoutes');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(methodOverride("_method"));
// app.use('/css/', cssDirectory)
// app.use('/scripts/', scriptDirectory)

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
app.use('/', indexRoutes);
app.use('/listed', subItemRoutes);
app.use('/listed', itemRoutes);
app.use('/listed', bigListRoutes);

module.exports = app;

