const { Router } = require('express');
const { activitiesHandlers } = require('../handlers/activitiesHandlers');


const activitiesRouter = Router();

activitiesRouter.post('/', activitiesHandlers)


module.exports = activitiesRouter;
