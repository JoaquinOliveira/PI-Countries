import React from 'react';

export default function Paginate({ paginated, allCountries, countriesPerPage, currentPage }){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
        pageNumbers.push(i);
    }
    if(currentPage === pageNumbers.length + 1){
        paginated(1)
      }


    return (
        <nav>
            <ul className="paginated">
                {pageNumbers &&
                    pageNumbers.map((number) => (
                        <button key={number} onClick={() => paginated(number)}>
                            {number}
                        </button>
                    ))}
            </ul>
        </nav>
    );
                    }