

// import React from 'react';
// import { useState, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";

// import Cards from "../Cards/cards";
// import { getPaginationDrivers } from '../../redux/actions';

// function Pagination() {
//   const [page, setPage] = useState(1)
//     const [array, setArray] = useState([])
//     const [offset, setOffSet] = useState(0)
//     const allDrivers = useSelector(state => state.allDrivers);
//     const selectPagina = useSelector(state => state.pagina);

//     const dispatch = useDispatch();

//     let numPage = Math.ceil(allDrivers.length / 9)

//     useEffect(() => {
//         if (page <= 10) {
//             setOffSet(0);
//         } else if (page <= 20) {
//             setOffSet(10);
//         } else if (page <= 30) {
//             setOffSet(20);
//         } else if (page <= 40) {
//             setOffSet(30);
//         } else if (page <= 50) {
//             setOffSet(40);
//         } else if (page <= 57) {
//           setOffSet(50);
//         }
//     }, [page])


//     function menos(page) {
//         if (page > 1) setPage(page - 1)
//         if (page < 1) setPage(1)
//     }
//     function mas(page) {
//         if (page < numPage) setPage(page + 1)
//         if (page > numPage) setPage(numPage)
//     }

//     function showPagina(drivers, page) {
//         dispatch(getPaginationDrivers(drivers, page))
//     }

//     function numPagina(item) {
//         setPage(item)
//     }

//     useEffect(() => {
//         setPage(1)
//         function allPaginas(paginas) {
//             const arreglo = []
//             for (let i = 1; i <= paginas; i++) {
//                 arreglo.push(i)
//             }
//             setArray(arreglo)
//         }
//         allPaginas(numPage)
//     }, [allDrivers])

//     useEffect(() => {
//         if (allDrivers.length > 0) {
//             showPagina(allDrivers, page)
//         }
//     }, [allDrivers, page])

//     return (
//       <div className='paginado'>
//       <Cards pagina={selectPagina} />
//       <button onClick={() => { menos(page) }}>Anterior</button>
//       <span>
//           {array.length > 0 ? array.slice(offset, offset + 10).map((item) => (
//               <button className={item == page ? 'active' : ''} onClick={() => numPagina(item)} key={item}>{item}</button>)
//           ) : '1'}
//       </span>
//       <button onClick={() => { mas(page) }}>Siguiente</button>
//   </div>
//     )
// };

// export default Pagination;
