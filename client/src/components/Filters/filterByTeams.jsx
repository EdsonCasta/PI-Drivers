import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCards } from "../../redux/actions";

function Filter() {

    const allTeams = useSelector(state => state.allTeams);
    // console.log(allTeams);

    const dispatch = useDispatch()

    const handleFilter = (evento) => {
        dispatch(filterCards(evento.target.value))
    }

    return (
        <div>
            <div>
                <select name="filter"
                    defaultValue='filterTeams'
                    onChange={handleFilter}>
                    <option value="filterTeams" disabled='disabled'>teams...</option>
                </select>
            </div>
        </div>
    )
};

export default Filter;