const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');
const info = require ('./info/info');

const express = require('express'),
cors = require('cors'),
app = express();

const originsWhitelist = [
    'http://localhost:4200',      // this is my front-end url for development
  ];

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

app.get('/weather', function(req, res) {
    let query = req.query;
    info.getInfo(query.city).then(weather => {
        objectWeather = {
            weather: weather
        }

        res.send(objectWeather);
    })
    
  });

app.listen(3000);
  


// const argv = require('yargs').options({
//     direccion:{
//         alias:'d',
//         desc:'Direccion',
//         demmand: true
//     }
// }).argv;

// lugar.getLugar(argv.direccion)
//      .then (console.log)    

// clima.getClima(45.419998, -75.690002)
//      .then (console.log)
//      .catch(console.log)

// info.getInfo(argv.direccion)
//         .then(console.log)
//         .catch(console.log) 