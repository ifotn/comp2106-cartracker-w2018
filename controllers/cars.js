// references
const express = require('express');
const router = express.Router();

// GET: /cars
router.get('/', (req, res, next) => {
   res.render('cars/index', {
       title: 'Car List'
   });
});

// make public
module.exports = router;