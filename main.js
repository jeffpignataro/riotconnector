var config = require('./config');

var request = require('request');

var requestController = require('./controllers/requestController');

var url = `https://${config.region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/${config.testSummonerName}?api_key=${config.apiKey}`;

console.log(url);

request(url, function(error, response, body) {
    console.log(body);
});
