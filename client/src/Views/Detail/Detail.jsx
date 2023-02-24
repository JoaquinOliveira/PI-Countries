import { getCountriesById } from "../../redux/actions";
import React from 'react';
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import style from './Detail.module.css';

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(id)
        dispatch(getCountriesById(id));
    }, [dispatch, id]);
    const myCountry = useSelector((state) => {
        console.log("myCountry:", state.countriesDetail);

        return state.countriesDetail;
    });
    console.log('mycountry:' + myCountry.id)
    console.log('myCountry.length:' + myCountry.length)
    console.log(Object.keys(myCountry).length > 0)
    return (
        <div className={style.container}>
            {Object.keys(myCountry).length > 0 ?
                <div className={style.detail}>
                    <h1>{myCountry.name}</h1>
                    <div className={style.flagdetail}> <img src={myCountry.flag} alt='Flag img' /> </div>
                    <div className={style.info}>
                        <div className={style.info1}>
                            <h2 className={style.tittle2}>Capital:</h2> <p>{myCountry.capital ? myCountry.capital : 'There is no capital'}</p>
                            <h2 className={style.tittle2}>Subregion:</h2> <p>{myCountry.subregion}</p>
                        </div>
                        <div classname={style.info2}>
                            <h2 className={style.tittle2}>Population:</h2> <p>{myCountry.population}</p>
                            <h2 className={style.tittle2}>Area:</h2> <p>{myCountry.area} Km</p>
                        </div>
                    </div>
                    {myCountry.activities && myCountry.activities.length > 0 ?
                        <div><h2>Activities:</h2>
                            <ul>
                                {myCountry.activities.map(activity => (
                                    <div>
                                        <li key={activity.id}>
                                        <p>{activity.name}</p>
                                        <p>{activity.difficulty} </p>
                                        <p>{activity.duration} months</p>
                                        <p>{activity.season}</p>
                                        </li>
                                    </div>

                                ))}
                            </ul>
                        </div>

                        : <p>No activities found.</p>
                    }
                </div>
                : <p> Loading</p>
            }
            <Link to='/home'><button className={style.btn}>Volver</button></Link>
        </div>
    )
}
export default Detail