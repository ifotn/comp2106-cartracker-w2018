// references
const express = require('express');
const router = express.Router();
const Car = require('../models/car');

// GET: /cars
router.get('/', (req, res, next) => {
    // get car documents from db
    Car.find((err, cars) => {
        if (err) {
            console.log(err);
        }
        else {
            res.render('cars/index', {
                title: 'Car List',
                cars: cars
            });
        }
    });
});

// GET: /cars/add
router.get('/add', (req, res, next) => {
    res.render('cars/add', {
        title: 'Add a New Car'
    });
});

// POST: /cars/add
router.post('/add', (req, res, next) => {
   // use the Car model to save the new cart
   Car.create({
       make: req.body.make,
       model: req.body.model,
       year: req.body.year,
       colour: req.body.colour
   }, (err, car) => {
       if (err) {
           console.log(err);
       }
       else {
           res.redirect('/cars');
       }
   }) ;
});

// make public
module.exports = router;