const { createActivity } = require('../controllers/activityController')
const { Activities, Country } = require('../db')

const activitiesHandlers = async (req, res) => {
    //el readme pide cree una actividad con varios datos, que al ser un form,
    // vendran por un body.
    try {
        const { name, difficulty, duration, season, countryId } = req.body;
        const newActivity = await createActivity(name, difficulty, duration, season, countryId);
        res.status(201).json(newActivity);
    }
    catch(error) {
        res.status(400).json({error: error.message});
    }
}
    module.exports = { activitiesHandlers }

    