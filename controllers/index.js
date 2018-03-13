const express = require('express');
const router = express.Router();

// auth references
const passport = require('passport');
const User = require('../models/user');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Car Tracker',
    message: 'COMP2106 In-Class Node Application'
  });
});

// GET: /about
router.get('/about', (req, res, next) => {
  // load the about view
    res.render('about', {
      title: 'About Car Tracker',
        message: 'This app is built with the MEAN Stack.'
    });
});

// GET: /contact
router.get('/contact', (req, res, next) => {
  res.render('contact', {
    title: 'Contact Us',
      message: 'Here is how to reach us...'
  });
});

// GET: /register
router.get('/register', (req, res, next) => {
   res.render('register', {
     title: 'Register'
   });
});

// POST: /register
router.post('/register', (req, res, next) => {
  // create the new User with our model
    User.register(new User({
        username: req.body.username,
        phone: req.body.phone
    }), req.body.password, (err, user) => {
      if (err) {
        console.log(err);
      }
      else {
        // automatically log the user in and direct to /cars
          /*req.login(user,  (err) => {
            res.redirect('/cars')
          })*/
          res.redirect('/login');
      }
    });
});

// GET: /login
router.get('/login', (req, res, next) => {
  res.render('login', {
    title: 'Login'
  });
});

// POST: /login
router.post('/login', passport.authenticate('local', {
  successRedirect: '/cars',
    failureRedirect: '/login'
}));

module.exports = router;
