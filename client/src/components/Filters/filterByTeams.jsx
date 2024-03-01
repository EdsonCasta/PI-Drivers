import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/card";
import { filterCards } from "../../redux/actions";

function Filter({ team }) {

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
                    <option value="Ferrari">Ferrari</option>
                    <option value="Bmw">Bmw</option>
                    <option value="Renault">Renault</option>
                    <option value="Lotus">Lotus</option>
                    <option value="Mc claren">Mc claren</option>
                </select>
            </div>
            {team.map(driver => (
                <Card
                    key={driver.id}
                    id={driver.id}
                    name={driver.name}
                    nationality={driver.nationality}
                    image={driver.image}
                    description={driver.description}
                    birthdate={driver.birthdate}
                    teams={driver.teams}
                />
            ))}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        team: state.team
    }
}

export default connect(mapStateToProps)(Filter)