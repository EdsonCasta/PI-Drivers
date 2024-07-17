import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Cards from "../Cards/cards";
import { getPaginationDrivers } from '../../redux/actions';

function Pagination() {
    
    const [page, setPage] = useState(1);
    const allDrivers = useSelector(state => state.filteredDrivers);
    const selectPagina = useSelector(state => state.pagina);
    const dispatch = useDispatch();

    const driversPerPage = 9; // Número de drivers por página
    const pagesPerBatch = 10; // Número de páginas a mostrar a la vez
    let numPage = Math.ceil(allDrivers.length / driversPerPage);

    useEffect(() => {
        if (allDrivers.length > 0) {
            dispatch(getPaginationDrivers(allDrivers, page));
        }
    }, [allDrivers, page, dispatch]);

    useEffect(() => {
        setPage(1); // Resetear la página a 1 cuando cambian los drivers filtrados
    }, [allDrivers]);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= numPage) {
            setPage(newPage);
        }
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const currentBatch = Math.floor((page - 1) / pagesPerBatch); //0
        const start = currentBatch * pagesPerBatch + 1;               //1
        const end = Math.min(start + pagesPerBatch - 1, numPage);     //10

        // Botones del lote actual
        for (let i = start; i <= end; i++) {
            pageNumbers.push(
                <button 
                    key={i} 
                    className={i === page ? 'active' : ''} 
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </button>
            );
        }

        // Botones adicionales para avanzar rápidamente, si están fuera del lote actual
        for (let i = 10; i <= numPage; i += 10) {
            if (i > end) {
                pageNumbers.push(
                    <button 
                        key={i} 
                        className={i === page ? 'active' : ''} 
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
            }
        }

        // Botones adicionales para retroceder rápidamente, si están fuera del lote actual
        for (let i = 10; i <= numPage; i += 10) {
            if (i < start) {
                // Encontrar la posición correcta para insertar el botón
                const insertIndex = pageNumbers.findIndex(
                    (button) => parseInt(button.key) > i
                );
                const newButton = (
                    <button 
                        key={i} 
                        className={i === page ? 'active' : ''} 
                        onClick={() => handlePageChange(i)}
                    >
                        {i}
                    </button>
                );
                if (insertIndex === -1) {
                    pageNumbers.push(newButton);
                } else {
                    pageNumbers.splice(insertIndex, 0, newButton);
                }
            }
        }
        return pageNumbers;
    };

    return (
        <div className='paginado'>
            <Cards pagina={selectPagina} />
            <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>Anterior</button>
            <span>{renderPageNumbers()}</span>
            <button onClick={() => handlePageChange(page + 1)} disabled={page === numPage}>Siguiente</button>
        </div>
    );
}

export default Pagination;
