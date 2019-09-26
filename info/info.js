const lugar = require('../lugar/lugar')
const clima = require('../clima/clima')

const getInfo = async (direccion) => {
    try {
        const coordenadas = await lugar.getLugar(direccion);
        const temp = await clima.getClima(coordenadas.latitud, coordenadas.longitud);
        return temp
    }
    catch (error) {
        console.log(`No existe esa dirección`)
    }
    

}   

module.exports = {
    getInfo
}