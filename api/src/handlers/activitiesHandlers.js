const { createActivity } = require('../controllers/activityController')


const activitiesHandlers = async (req, res) => {
    //el readme pide cree una actividad con varios datos, que al ser un form,
    // vendran por un body.
    try {
        const { name, difficult, duration, season, countryId } = req.body;
        const newActivity = await createActivity({name, difficult, duration, season, countryId});
        res.status(201).json(newActivity);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
}
    module.exports = { activitiesHandlers }