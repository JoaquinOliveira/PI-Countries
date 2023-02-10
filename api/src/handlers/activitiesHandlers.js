const { createActivity } = require('../controllers/activityController');
const { Activities } = require('../db');

const handleError = (res, error) => {
    return res.status(400).json({ error: `Ocurrió un error: ${error.message}` })
}; //creo handle error

const activitiesHandlers = async (req, res) => {
    //el readme pide cree una actividad con varios datos, que al ser un form,
    // vendran por un body.
    try {
        const { name, difficulty, duration, season, countryId } = req.body; //destructuro del body las propiedades que necesito. Agrego countryId para poder hacer la relación luego con la base de datos Country
        const newActivity = await createActivity(name, difficulty, duration, season, countryId); //creo la nueva actividad modularizando la función.
        res.status(201).json(newActivity); //si puedo crearla, la devuelvo con el statos.
    }
    catch (error) {
        res.status(400).json(handleError(res, error)); //sino manejo el error.
    }
}

//agrego un get activities

const getActivitiesHandler = async (req, res) => {
    const allActivities = await Activities.findAll();
    try {
        res.status(200).json(allActivities);

    } catch (error) {
        res.status(400).json(handleError(res, error));
    }
}
//agrego un deleteActivities.

const deleteActivities = async (req, res) => {
    const { id } = req.params;
    try {
        await Activities.destroy({
            where: { id }
        });
        res.status(200).json('Activity deleted')
    } catch (error) {
        res.status(400).json(handleError(res, error));
    }
}

module.exports = { activitiesHandlers, deleteActivities, getActivitiesHandler }

