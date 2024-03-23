import React from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../../redux/actions";

function Order() {

    const dispatch = useDispatch()

    const handleAlfabetico = (evento) => {
        dispatch(orderCards(evento.target.value, "Alfabetico"))
    };

    const handleNacimiento = (evento) => {
        dispatch(orderCards(evento.target.value, "Nacimiento"))
    };

    return (
        <div>
             <div className='filter'>
                <select className="filter-select" name="alfabetico" defaultValue="alfabetico" onChange={handleAlfabetico}>
                    <option value="alfabetico" disabled="disabled">Alfabético...</option>
                    <option value="desc">A-Z</option>
                    <option value="asc">Z-A</option>
                </select>
            </div>
            <div className='filter'>
                <select className="filter-select" name="Nacimiento" defaultValue="Nacimiento" onChange={handleNacimiento}>
                    <option value="Nacimiento" disabled="disabled">Nacimiento...</option>
                    <option value="desc">Mayor</option>
                    <option value="asc">Menor</option>
                </select>
            </div>
        </div>
    )
};

export default Order;