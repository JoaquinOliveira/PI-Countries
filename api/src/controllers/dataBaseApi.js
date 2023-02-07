const { Activity, Country } = require('../db');
const axios = require('axios');

//acá, ante la posibilidad, voy a getear con axios toda la data que necesito de la api y la voy a bulkcrear dentro de mi base de datos.
//si mi db no tiene data, agrego la data de la api

const fullDataBase = async () => {
    try {
        const apiData = await axios.get('https://restcountries.com/v3/all') //geteo la data y la alojo en mi constante.
        const dbData = await Country.findAll({                              //creo constante de búsqueda en la DB, agregando los atributos del modelo faltante (Activity)
            include: {
                model: Activity,
                attributes: ['name', 'difficulty', 'duration', 'season'],
                through: { attributes: {} },
            }
        })
        if (dbData) return dbData.length //retorno la base de datos, si ya tengo data.
        if (!dbData) {
            const fullDB = // si no hay nada, creo la dataBase con la API.
            Country.bulkCreate(
                apiData.data.map((e) => {
                    return {
                        id: e.cca3,
                        name: e.name.common,
                        flag: e.flags[0],
                        continents: e.continents[0],
                        capital: e.capital? e.capital[0] : 'Not Found', //como va haber un país sin capital.
                        subregion: e.subregion,
                        area: e.area,
                        population: e.population ,

                    }
                })
            )
            return fullDB
        }


    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = { fullDataBase } 