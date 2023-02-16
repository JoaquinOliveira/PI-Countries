import React from 'react';
import styles from './Paginate.module.css'

export default function Paginate({ paginated, allCountries, countriesPerPage, currentPage, prevHandler, nextHandler }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    const getDisplayedPageNumbers = () => {
        const lastPage = pageNumbers.length;
        const firstPage = pageNumbers[0]
        const displayRange = 1;
        const firstDisplayed = Math.max(1, currentPage - displayRange);
        const lastDisplayed = Math.min(lastPage, currentPage + displayRange);
        console.log('first display ' + firstDisplayed)
        console.log('last display ' + lastDisplayed )
        console.log('current ' + currentPage)
        let pages = [];
        console.log(pages)
        if (firstDisplayed > firstPage) {
            pages.push(1);
            if (firstDisplayed > 2) {
                pages.push("...");
                if (currentPage === 3 ){
                    pages = pages.filter((c) => c !== "...")}
            }
        }
        for (let i = firstDisplayed; i <= lastDisplayed; i++) {
            pages.push(i);
        }

        if (lastDisplayed < lastPage) {
            if (lastDisplayed < lastPage - 1) {
                pages.push("...");
            }
            pages.push(lastPage);
        }

        return pages;
    }

    //La función getDisplayedPageNumbers() crea un array pages que contiene los números de página a mostrar en la barra de paginación. Esta función se encarga de calcular qué números de página deben mostrarse, así como los puntos suspensivos (...) que aparecen cuando hay páginas ocultas.
    //Primero, se comprueba si la primera página que se mostrará es mayor que 1, lo que significa que hay páginas antes de la primera página que se muestra. En este caso, se agrega el número 1 al array pages. Si la primera página que se muestra es mayor que 2, entonces se agrega un punto suspensivo al array pages.
    //Luego, se usa un bucle for para agregar al array pages los números de página que deben mostrarse en la barra de paginación. El bucle comienza en firstDisplayed y termina en lastDisplayed, ambos valores determinados anteriormente.
    //Después, se comprueba si la última página que se muestra es menor que la última página en general. Si la última página que se muestra es menor que la última página menos 1, se agrega un punto suspensivo al array pages. Finalmente, se agrega el número de la última página al array pages.
    //El array pages resultante se devuelve desde la función y se utiliza para renderizar los botones de paginación en la interfaz de usuario. 

    return (
        <nav>
            <div className={styles.navPages}>
                <button disabled={currentPage === 1} className={`${styles.pageBtn} ${styles.prev}`} onClick={() => prevHandler()}></button>
                <ul className={styles.pageList}>
                    {getDisplayedPageNumbers().map((number, index) => (
                        <button
                            className={currentPage === number ? styles.match : styles.numberPage}
                            key={index}
                            onClick={number === '...'? null : () => paginated(number)}
                            
                        >
                            {number}
                        </button>
                    ))}
                </ul>
                <button disabled={currentPage === pageNumbers[pageNumbers.length - 1]} className={`${styles.pageBtn} ${styles.next}`} onClick={() => nextHandler()}></button>
            </div>
        </nav>
    );

    
}

