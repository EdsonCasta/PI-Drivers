import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { orderCards } from "../../redux/actions";

function Order({ alfabeticoOrder, setAlfabeticoOrder, birthdateOrder, setBirthdateOrder }) {

    const dispatch = useDispatch();

    useEffect(() => {
        if (alfabeticoOrder !== "alfabetico") {
            setBirthdateOrder("Nacimiento");
        }
    }, [alfabeticoOrder]);

    useEffect(() => {
        if (birthdateOrder !== "Nacimiento") {
            setAlfabeticoOrder("alfabetico");
        }
    }, [birthdateOrder]);

    const handleAlfabetico = (evento) => {
        setAlfabeticoOrder(evento.target.value);
        dispatch(orderCards(evento.target.value, "Alfabetico"));
    };

    const handleNacimiento = (evento) => {
        setBirthdateOrder(evento.target.value);
        dispatch(orderCards(evento.target.value, "Nacimiento"));
    };

    return (
        <div>
            <div className='filter'>
                <select 
                    className="filter-select" 
                    name="alfabetico" 
                    value={alfabeticoOrder} 
                    onChange={handleAlfabetico}
                >
                    <option value="alfabetico" disabled>Alfabético...</option>
                    <option value="desc">A-Z</option>
                    <option value="asc">Z-A</option>
                </select>
            </div>
            <div className='filter'>
                <select 
                    className="filter-select" 
                    name="Nacimiento" 
                    value={birthdateOrder} 
                    onChange={handleNacimiento}
                >
                    <option value="Nacimiento" disabled>Nacimiento...</option>
                    <option value="desc">Menor</option>
                    <option value="asc">Mayor</option>
                </select>
            </div>
        </div>
    );
}

export default Order;
