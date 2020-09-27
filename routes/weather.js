////
var express = require('express');
var router = express.Router();

router.get('/api/v1/weather', function(req, res, next) {
res.send({ title: 'Weather', Temperature: "90.5", Unit: "fahrenheit", Cloudy: "false", PrecipitationChance: "0"});
});

module.exports = router;
////
