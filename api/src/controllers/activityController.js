const { Activities, Country } = require('../db');


const createActivity = async (name, difficulty, duration, season, countryId) => {
    const newActivity = await Activities.findOrCreate({  //al principio usé create, pero me generaba que una misma actividad podía estar repetida en el país.
        where: {name}, //busco por name y devuelvo el resto de las propiedades por default.
        defaults: {difficulty, duration, season}
    });
    const country = await Country.findByPk(countryId); //busco el country y hago una mini validación previa.
    if (!country) {
        throw new Error(`No se encontró un país con ID ${countryId}`); //si no existe, devuelvo que no se encontró el country.
    }
    //console.log(newActivity) // gracias console.log. Dos horas en usarte, si no te menospreciara tanto.
    await newActivity[0].addCountry(countryId); //me costó entender que para agregar el country en la nueva actividad, debía fijarla en [0], pues el findOrCreate devuelve un objeto con bastante más data
    


    return newActivity; //devuelvo el objeto creado.
}

module.exports = { createActivity }