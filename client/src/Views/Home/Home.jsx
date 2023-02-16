
import CardsContainer from '../../components/CardsContainer/CardsContainer';
import Paginate from '../../components/Paginate/Paginate';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAllActivities,
    getAllCountries,
    orderByName,
    orderByPopulation,
    filterByActivities,
    filterByContinent
} from '../../redux/actions';

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries);
    const activities = useSelector(state => state.activities);

    useEffect(() => {
        if (!countries.length) {
            dispatch(getAllCountries());
        }
        dispatch(getAllActivities());
    }, [dispatch, countries.length]);

    const [currentPage, setCurrentPage] = useState(1);
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [order, setOrder] = useState('');

    const indexOfLastCountry = currentPage * countriesPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
    const currentCountry = countries.slice(indexOfFirstCountry, indexOfLastCountry);

    function nextHandler() {
        const totalCountries = countries.length;
        const nextPage = currentPage;
        const firstIndex = nextPage * countriesPerPage; 
        if (firstIndex >= totalCountries) return; 

        setCurrentPage(currentPage + 1);
    }

    function prevHandler() {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;
        setCurrentPage(prevPage);
    }

    const handleOrderByName = (e) => {
        e.preventDefault();
        dispatch(orderByName(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    };

    const handleOrderByPopulation = (e) => {
        e.preventDefault();
        dispatch(orderByPopulation(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    };

    const handleFilterByActivities = (e) => {
        e.preventDefault();
        dispatch(filterByActivities(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    };

    const handleFilterByContinent = (e) => {
        e.preventDefault();
        dispatch(filterByContinent(e.target.value));
        setCurrentPage(1);
        setOrder(`Ordered ${e.target.value}`);
    };

    const handleAllCharacters = () => {
        dispatch(getAllCountries());
    };

    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return (
        <>
            <h1>Esta es la vista de Home</h1>
            <button onClick={(e) => handleAllCharacters(e.target.value)}>All Characters!</button>
            <div>
                <select name='Order by name' onChange={(e) => handleOrderByName(e)}>
                    <option value="">Order by Name</option>
                    <option value='asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>
                <select name="Order by population" onChange={(e) => handleOrderByPopulation(e)}>
                    <option value="">Order by Population</option>
                    <option value='asc'>Ascendente</option>
                    <option value='des'>Descendente</option>
                </select>
                <select name="Filter by Activities" onChange={(e) => handleFilterByActivities(e)}>
                    <option value="All">All Countries</option>
                    {activities.map((a) => (
                        <option value={a.name} key={a.id}>{a.name}</option>
                    ))}
                </select>
                <select name="Filter by Continents" onChange={(e) => handleFilterByContinent(e)}>
                    <option value='All'>Filter by Continents</option>
                    <option value='Antarctica'>Antarctica</option>
                    <option value='North America'>North America</option>
                    <option value='South America'>South America</option>
                    <option value='Asia'>Asia</option>
                    <option value='Europe'>Europe</option>
                    <option value='Africa'>Africa</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
            <Paginate paginated={paginated}
                allCountries={countries.length}
                countriesPerPage={countriesPerPage}
                currentPage={currentPage}
                nextHandler={nextHandler}
                prevHandler={prevHandler} />

            <CardsContainer currentCountry={currentCountry}

            />


        </>
    )
}


export default Home;