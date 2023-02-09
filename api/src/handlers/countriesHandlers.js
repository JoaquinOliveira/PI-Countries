const { fullDataBase } = require('../controllers/dataBaseController');
const { Country, Activities } = require('../db');

const searchOptions = {
    include: {
        model: Activities,
        through: {
            attributes: [],
        },
    },
};

const findCountry = async (id) => {
    return await Country.findByPk(id, searchOptions);
};
const handleError = (res, err) => {
    return res.status(500).json({ error: `Ocurrió un error: ${err.message}` });
};

const getAllCountriesHandler = async (req, res) => {
    fullDataBase();
    const { name } = req.query;
    const allCountries = await Country.findAll(searchOptions);
    try {
        if (name) {
            const country = allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
            if (country.length) {
                return res.status(200).json(country);
            }
            return res.status(400).json("No country found");
        }
        return res.status(200).json(allCountries);
    } catch (err) {
        return handleError(res, err);
    }
};

const getCountryHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const countryId = await findCountry(id);
        if (countryId) {
            return res.status(200).json(countryId);
        }
        return res.status(400).json(`No country found with such ID: ${id}`);
    } catch (err) {
        return handleError(res, err);
    }
};

module.exports = {
    getAllCountriesHandler,
    getCountryHandler,
};
/* const getAllCountriesHandler = async (req, res) => {
    const { name } = req.query;
    fullDataBase() //llamo a la api para llenar mi DB de datos.
    const allCountries = await Country.findAll({ //busco todos los countries, agrgeandole el model Activities

        include: {
            model: Activities, 
            through: {
                attributes: [],
            },
        },
    });
    try { 
        if (name) {
            const country = allCountries.filter(c => c.name.toLowerCase().includes(name.toLowerCase())); //hago el filter de los countries que posean la data dada por query.
            if (country.length) { //si existe un country como tal, lo muestro
                return res.status(200).json(country); 
            }
            return res.status(400).json("Not existing country"); //sino arrojo un status 400 diciendo que no existe un Country con el query dado.
        }
        return res.status(200).json(allCountries); //si no hay name en query, devuelvo toda la DB
    } catch (err) {
        console.log(err);
    }
};

const getCountryHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const countryId = await Country.findByPk(id, {
            include: {
                model: Activities,
                through: {
                    attributes: [],
                },
            },
        });
        if (countryId) {
            return res.status(200).json(countryId);
        }
        return res.status(400).json(`Not country available with such ID: ${id}`);
    } catch (err) {
        console.log(err);
    }
};*/

module.exports = {
    getAllCountriesHandler,
    getCountryHandler,
};
