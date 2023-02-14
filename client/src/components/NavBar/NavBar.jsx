import { Link } from 'react-router-dom';
import style from './NavBar.module.css';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCountriesByName } from '../../redux/actions';


const NavBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(name);
        
    }
    const handleButtonChange = (e) => {
        e.preventDefault();
        dispatch(getCountriesByName(name));
    }

    const handleLinkClick = () => {
        setName('');
    }

    return (
        <div className={style.mainContainer}>
            <Link to='/home' onClick={handleLinkClick}> Home </Link>
            <Link to='/activities' onClick={handleLinkClick}> FORM </Link>
            <input
                type='text'
                placeholder='Search...'
                onChange={(e) => handleInputChange(e)}
            />
            <button onClick= {(e) => handleButtonChange(e)} type='submit'>Search</button>
         
        </div>
    )
} 



export default NavBar