var express = require('express');
const app = require('../app');
var router = express.Router();

app.use(express.static("public"));

let temp = 90.5

/* GET home page. */
router.get('/api/v1/weather', function(req, res, next) {
 // res.send('hello world');
  //res.render('index', { title: 'Express' });
  res.send('index', { title: 'Weather', Temperature: "90.5", Unit: "fahrenheit", Cloudy: "false", PrecipitationChance: "0"});


  
});

app.get('/api/v1/weather', function(req, res) {
  res.send('hello world');
  });



module.exports = router;
