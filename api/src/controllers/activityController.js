const { Activity } = require('../db');
const createActivity = async (name, difficult, duration, season, countryId) => {
const newActivity = await Activity.create({name, difficult, duration, season})
    await newActivity.addCountry(countryId)

    return newActivity 
}
module.exports = { createActivity }