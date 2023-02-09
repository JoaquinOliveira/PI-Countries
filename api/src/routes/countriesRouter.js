const { Router } = require('express');
const { getAllCountriesHandler, getCountryHandler} = require('../handlers/countriesHandlers');
const { fullDataBase } = require('../controllers/dataBaseController');

const countriesRouter = Router();


countriesRouter.get('/', getAllCountriesHandler);
countriesRouter.get('/:id', getCountryHandler);


module.exports = countriesRouter;
