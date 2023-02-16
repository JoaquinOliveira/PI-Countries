import styles from './Form.module.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCountries, postActivity } from '../../redux/actions';


export default function Form() {
    const dispatch = useDispatch();
    const countries = useSelector(state => state.countries)
    const countriesNames = countries.map(country => { return { label: country.name, value: country.id } })
    const navigate = useNavigate();
    const activities = useSelector(state => state.activities);
    console.log(activities)



    useEffect(() => {
        dispatch(getAllCountries());
    }, [dispatch]);

    const [input, setInputData] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: [],
    })

    const [errors, setErrors] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
    })

    const handleInputChange = ((e) => {
        setInputData({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }
    )

    /* const handleInputChecked = ((e) => {
        if (e.target.checked)
            setInputData({
                ...input,
                season: e.target.value
            })
    }) */

    const handleSelect = ((e) => {
        setInputData({
            ...input,
            countryId: [...input.countryId, e.target.value],
        })
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.name && input.difficulty && input.season && input.countryId.length) {


            dispatch(postActivity(input));
            //axios.post("http://localhost:3001/activities", input)
            //     .then(res => alert(res.data))
            //     .catch(err => alert(err)) 
            alert("You added a new Activity");
            setInputData({
                name: "",
                difficulty: 0,
                duration: 0,
                season: "",
                countryId: [],
            });
            navigate('/home');
        } else {
            e.preventDefault()
            alert("You must complete every field correctly!");
        }
    };



    const handleDelete = ((e, d) => {
        e.preventDefault();
        setInputData({
            ...input,
            countryId: input.countryId.filter((country) => country !== d),
        })
    });


    const validate = (input) => {
        let errors = {};

        if (!input.name) {
            errors.name = 'You MUST fulfill name property!';
        } else if (activities.map(activity => activity.name).some(name => name === input.name)) {
            errors.name = "Watch out! That activity already exists"
        }

        // check the other input properties
        if (!input.difficulty || input.difficulty < 1 || input.difficulty > 5) {
            errors.difficulty = 'You MUST fulfill difficulty property between 1 to 5!';
        }
        if (!input.duration) {
            errors.duration = 'You MUST fulfill duration property!';
        }
        if (!input.season) {
            errors.season = 'You MUST fulfill season property!';
        }

        return errors;
    };



    return (
        <div>
            <Link to='/home'><button>Volver</button></Link>
            <h1> Create your Activity!</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label>Name:</label>
                    <input
                        type='text'
                        value={input.name}
                        name='name'
                        onChange={(e) => handleInputChange(e)}
                    />
                    {<p className={styles.danger}>{errors.name ? errors.name : null}</p>}
                </div>
                <div>
                    <label>Difficulty:</label>
                    <input
                        type='number'
                        min='1'
                        max='5'
                        value={input.difficulty}
                        name='difficulty'
                        onChange={(e) => handleInputChange(e)}
                    />
                    {<p className={styles.danger}>{errors.difficulty ? errors.difficulty : null}</p>}
                </div>
                <div>
                    <label>Duration:</label>
                    <input
                        type='number'
                        value={input.duration}
                        name='duration'
                        onChange={(e) => handleInputChange(e)}
                    />
                    {<p className={styles.danger}>{errors.duration ? errors.duration : null}</p>}
                </div>
                <div>
                    <span>Season:</span>
                    <select className="input" name="season" id="season" onChange={(e) => handleInputChange(e)}>
                        <option value="empty"> </option>
                        <option value="winter" key="winter">Winter</option>
                        <option value="fall" key="fall">Fall</option>
                        <option value="spring" key="spring">Spring</option>
                        <option value="summer" key="summer">Summer</option>
                    </select>
                    {errors.season && <p className="errors">{errors.season}</p>}
                </div>
                <select multiple value='countryId' onChange={(e) => handleSelect(e)}>

                    {countriesNames.map(country => {
                        return <option key={country.value} value={country.value}>{country.label}</option>
                    })}
                </select>
                <button type='submit'> Create Activity</button>
            </form>
            {input.countryId.map((c, index) => (
                <div key={index}>
                    <p>{c}</p>
                    <button onClick={(e) => handleDelete(e, c)}>X</button>
                </div>
            ))}
        </div>)
}

//falta ver el tema de subir una imagen del harddrive personal de cada uno, o link de foto//

/* // PARA EL LOGIN //
/*   <div className={styles.container}>
           <form onSubmit={handleSubmit}>
               <div>
                   <label>Username: </label>
                   <input
                       className={errors.name && 'warning'}
                       name='username'
                       value={userData.username}
                       type='text'
                       onChange={handleInputChange}
                   />
                   <p className={styles.danger}>{errors.username ? errors.username : null}</p>

               </div>

               <div>
                   <label>Password: </label>
                   <input
                       className={errors.name && 'warning'}
                       name='password'
                       value={userData.password}
                       type='password'
                       onChange={handleInputChange}
                   />
                   <p className={styles.danger}>{errors.password ? errors.password : null}</p>
               </div>
               <button type='submit'>Login</button>
           </form>
       </div> */