const lugar = require('../lugar/lugar')
const clima = require('../clima/clima')

const getInfo = async (direccion) => {
    try {
        const coordenadas = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return temp
    }
    catch (error) {
        return `We don't have information about that city`
    }
    

}   

module.exports = {
    getInfo
}