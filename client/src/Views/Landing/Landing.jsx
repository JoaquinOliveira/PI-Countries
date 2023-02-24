import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About'
import styles from './Landing.module.css';

const Landing = () => {

    return (
        <div>
            <About />
            <Link to='/home'>
                <button className={styles.btn}> Ingresar </button>
            </Link>
        </div>
    )
}


export default Landing;





