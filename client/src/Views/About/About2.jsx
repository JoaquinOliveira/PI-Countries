import React from "react";
import styles from './About.module.css'
export default function About() {
    return (
        <div id='about' className={styles.container}>
            <div className={styles.front}>
                <img className={styles.image} src={require('../../Assets/WhatsApp Image 2023-02-23 at 11.58.54.jpeg')} alt="Foto de Perfil" />
                <h2 className={styles.data}>Joaquín S. Oliveira</h2>
            </div>
            <div className={styles.back}>
                <h2>{'Id: '} 1</h2>
                <h2>{'Country: '} Argentina</h2>
                <h2>{'Job: '} Lawyer & Future Front-end-Developer</h2>
                <h2>{'Activities: '} <p>Fútbol</p> <p>Tenis</p><p>Family</p></h2>
                <h2>Creador de esta SPA</h2>
            </div>
        </div>
    );
}
