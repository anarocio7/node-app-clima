// Axios is a promise based HTTP Client for the browser and Node.js
const axios = require ('axios');

const getClima = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=226a878b4af321f597a964f50e583fee&units=metric`)
    
    const data = {
        temp: response.data.main.temp,
        description: response.data.weather.length ? response.data.weather[0].description : '' 
    }
    return data;
}

module.exports = {
    getClima
}