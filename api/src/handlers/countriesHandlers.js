const {getCountryById} = require('../controllers/countryController')



const getAllCountriesHandler = (req, res) => {
    // 0) tengo traer la data de all countries  en el DB handler, hacer un 
    // bulkcreate y luego, guardarla en el DBhandler.
    // 1) una vez con los countries guardados en la data base, debo mostrarlos
    // con la data necesaria en la ruta principal.
    // 2) ojo porque desde este handler debo tmb, ver el tema del query.
    const { name } = req.query;
    if (name) res.status(200).send(`estoy pasando los paises con nombre ${name}`)
    else res.send('Si no aparece el country, Envío todos los countries de la DB y mando un mensaje por alert/throw respecto de que no existe tal country')
};

const getCountryHandler = async (req, res) => {
    // 1) debo obtener el detalle del país en particular.
    // 2) incluyendo los parametros pedidos.
    // 3) 
    const { id } = req.params;
    try {
        const country = await getCountryById(id);
        res.status(200).json(country);

    } catch (error) {
        res.status(400).json({error: error.message})
    }
};

module.exports = {
    getAllCountriesHandler,
    getCountryHandler,
};
