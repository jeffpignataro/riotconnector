var config = require('./config');

var request = require('request');

var summoner = "jeffp2662";
var url = 'https://' + config.region + 
		  '.api.pvp.net/api/lol/' + config.region + 
		  '/v1.4/summoner/by-name/' + summoner + 
		  '?api_key=' + config.apiKey;

//console.log(url);

request(url, function (error, response, body) {
  console.log(body);
});