import { getCountriesById } from "../../redux/actions";
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(id)
        dispatch(getCountriesById(id));
    },[dispatch, id]);
    const myCountry = useSelector((state) => {
        console.log("myCountry:", state.countriesDetail);

        return state.countriesDetail;
    });
    console.log('mycountry:' + myCountry.id)
    console.log('myCountry.length:' + myCountry.length)
    console.log(Object.keys(myCountry).length > 0)
    return (
        <div>
            {Object.keys(myCountry).length > 0 ?
                <div>
                    <h1>Soy {myCountry.name}</h1>
                    <img src={ myCountry.flag} alt='Flag img' />
                    <h2>{myCountry.capital? myCountry.capital : 'There is no capital'}</h2>
                    <h2>{myCountry.region}</h2>
                    <h2>{myCountry.continents}</h2>
                    <h2>{myCountry.population}</h2>
                    <h2>{myCountry.area}</h2>
                </div>
                : <p> Loading</p>
            }
            <Link to='/home'><button>Volver</button></Link>
        </div>
    )
}
export default Detail