const info = require ('./info/info');

const express = require('express'),
cors = require('cors'),
app = express();

// This array contains the list of valid URLs, 
// in this case, the port is 4200, he one we're using for Angular Applications

const originsWhitelist = [
    'http://localhost:4200',      // this is my front-end url for development
  ];

// Import cors options in order to get access 

const corsOptions = {
    origin: function(origin, callback){
          var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
          callback(null, isWhitelisted);
    },
    credentials:true
  }
  //here is the magic
  app.use(cors(corsOptions));

app.get('/', function(req, res) {
  res.send('hello world');
});

// On weather, we require the city and return the temperature

app.get('/weather', function(req, res) {
    let query = req.query;
    info.getInfo(query.city).then(weather => {
        objectWeather = {
            weather: weather
        }

        res.send(objectWeather);
    })
    
  });
// This is the back end port we're using

app.listen(3000);
  


