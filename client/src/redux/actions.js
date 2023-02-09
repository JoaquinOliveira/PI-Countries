import axios from 'axios';
import { 
    GET_COUNTRIES_BY_ID, 
    GET_COUNTRIES, 
    GET_COUNTRIES_BY_NAME, 
    GET_ACTIVITIES,
    POST_ACTIVITIES,
    DELETE_ACTIVITY, 
    FILTERED_BY_ACTIVITIES, 
    FILTERED_BY_CONTINENT, 
    ORDERED_BY_NAME, 
    ORDERED_BY_POPULATION, 
    CLEAN,
 } from './types';


export const getAllCountries = () => {
    return async function (dispatch) {
        const apiData = await axios.get('http://localhost:3001/countries')
        const countries = apiData.data;
        dispatch({ type: GET_COUNTRIES, payload: countries });
    };
}

export const getCountriesByName = (name) => {
    return async function (dispatch) {
        const apiData = await axios.get(`https://localhost:3001/countries?name=${name}`)
        const countryByName = apiData.data
        dispatch({ type: GET_COUNTRIES_BY_NAME, payload: countryByName });
    };
}
export const getCountriesById = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`https://localhost:3001/countries/${id}`)
        const countryById = apiData.data
        dispatch({ type: GET_COUNTRIES_BY_ID, payload: countryById });
    };
}


export const orderByPopulation = (dispatch) => {
    dispatch({ type: ORDERED_BY_POPULATION })
}
export const orderByName = (dispatch) => {
    dispatch({ type: ORDERED_BY_NAME })
}
export const filterByContinent = (dispatch) => {
    dispatch({ type: FILTERED_BY_CONTINENT })
}

export const filterByActivities = (dispatch) => {
    dispatch({ type: FILTERED_BY_ACTIVITIES })
}

//la agrego para tener alguna más
export const getAllActivities = (id) => {
    return async function (dispatch) {
        const apiData = await axios.get(`http://localhost:3001/activities/${id}`)
        const activityById = apiData.data
        dispatch({ type: GET_ACTIVITIES, payload: activityById });
    };
}

export function postActivity(payload) {
    return async function () {
        const apiData = await axios.post("http://localhost:3001/activities", payload);
        return{
            type: POST_ACTIVITIES,
            payload: apiData,
        };
    };
};

export function deleteActivity(id) {
    return async function (dispatch) {
        try {
            const activity = await axios.delete(`http://localhost:3001/activities/${id}`)
            return dispatch({
                type: DELETE_ACTIVITY,
                payload: activity,
            });
        } catch (error) {
            alert(error)
        }
    };
};

export function Clean() {
    return {
        type: CLEAN,
    };
}