const axios = require('axios');

const getLugar = async (direccion) => {

    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {'x-rapidapi-key':'b48a93a510msh672993d90bad886p10b7e4jsn84c6ed3f85f9',
              'x-rapidapi-host':'devru-latitude-longitude-find-v1.p.rapidapi.com'}
        });

    const response = await instance.get();

        if(response.data.Results.length === 0){
            throw new Error `No hay resultados para ${direccion}`
        }

        const data = response.data.Results[0];
        const dir = data.name;
        const latitud = data.lat;
        const longitud = data.lon;
       
    return {
        dir,
        latitud,
        longitud
    }

}

module.exports = {
    getLugar
}

