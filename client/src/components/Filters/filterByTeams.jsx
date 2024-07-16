import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterTeams, getTeams } from "../../redux/actions";

function Filter({ resetOrder }) {

    const allTeams = useSelector(state => state.allTeam);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTeams());
    }, [dispatch]);

    const handleFilter = (evento) => {
        const selectedTeam = evento.target.value;
        dispatch(filterTeams(selectedTeam));
        resetOrder();  // Llama a la función para reiniciar los filtros de ordenamiento
    }

    return (
       <div>
            <div>
                <select name="filter" defaultValue='filterTeams' onChange={handleFilter}>
                    <option value="filterTeams" disabled='disabled'>teams...</option>
                    {allTeams && allTeams.map(team => (
                        <option key={team} value={team}>{team}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default Filter;
