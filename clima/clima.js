const axios = require ('axios');

const getClima = async (lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=226a878b4af321f597a964f50e583fee&units=metric`)
    return response.data.main.temp;
}

module.exports = {
    getClima
}