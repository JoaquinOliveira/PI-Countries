import {
    GET_COUNTRIES,
    GET_COUNTRIES_BY_ID,
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

const initialState = {
    countries: [],
    countriesDetail: [],
    allCountries: [],
    activities: [],
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allCountries: action.payload
            };

        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                countries: action.payload,
            }

        case GET_COUNTRIES_BY_ID:
            return {
                ...state,
                countriesDetail: action.payload,
            }

        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            };

        case POST_ACTIVITIES:
            return {
                ...state,
            };

        case DELETE_ACTIVITY:
            return {
                ...state,
                activities: state.activities.filter((a) => a.id !== action.payload)
            };

        case FILTERED_BY_ACTIVITIES:
            const allCountries = state.allCountries;
            const filteredByActivities = action.payload === 'All' ?
                allCountries : allCountries.filter(c => {
                    const activities = c.activities.map((a) => a.name)
                    return activities.includes(action.payload)
                })
            return {
                ...state,
                countries: filteredByActivities
            };

        case FILTERED_BY_CONTINENT:
            state.countries = state.allCountries
            const countriesByContinent = state.countries;
            const filteredByContinent = action.payload === 'All' ?
                countriesByContinent : countriesByContinent.Filter(c => c.continent === action.payload)
            return {
                ...state,
                countries: filteredByContinent
            }

        case ORDERED_BY_NAME:
            const countriesName = state.countries;
            const countriesByName = countriesName.sort((a, b) => {
                if (action.payload === 'asc') {
                    if (a.name > b.name) {
                        return 1;
                    }
                    else if (a.name < b.name) {
                        return -1;
                    }
                    else return 0
                }
                else if (action.payload === 'des') {
                    if (a.name > b.name) {
                        return -1;
                    }
                    else if (a.name < b.name) {
                        return 1;
                    }
                    else return 0
                }
                return 'Ordered'
            });

            return {
                ...state,
                countries: countriesByName
            }

        case ORDERED_BY_POPULATION:
            const countriesPop = state.countries;
            const countriesByPopulation = countriesPop.sort((a, b) => {
                if (action.payload === 'asc') {
                    if (a.population > b.population) {
                        return 1;
                    }
                    else if (a.population < b.population) {
                        return -1;
                    }
                    else return 0
                }
                else if (action.payload === 'des') {
                    if (a.population > b.population) {
                        return -1;
                    }
                    else if (a.population < b.population) {
                        return 1;
                    }
                    else return 0
                }
                return 'Ordered'
            });

            return {
                ...state,
                countries: countriesByPopulation
            }
            
        case CLEAN:
            return {
                ...state,
                countries: state.allCountries
            };

        default:
            return state





    }
}
export default rootReducer;