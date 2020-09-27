var express = require('express');
const app = require('../app');
var router = express.Router();

// The following is for the Weather API. I put it inside of the index file as I was having issues when it was inside its own file.
router.get('/', function(req, res, next) {
 // res.send('hello world');
  //res.render('index', { title: 'Express' });
  res.send('index', { title: 'Weather', Temperature: "90.5", Unit: "fahrenheit", Cloudy: "false", PrecipitationChance: "0"});


  
});

module.exports = router;
