const lugar = require ('./lugar/lugar');
const clima = require ('./clima/clima');
const info = require ('./info/info');
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion',
        demmand: true
    }
}).argv;

lugar.getLugar(argv.direccion)
     .then (console.log)    

clima.getClima(45.419998, -75.690002)
     .then (console.log)
     .catch(console.log)

info.getInfo(argv.direccion)
        .then(console.log)
        .catch(console.log) 