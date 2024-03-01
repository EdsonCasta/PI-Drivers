import React from "react";
import { connect, useDispatch } from "react-redux";
import Card from "../Card/card";
import { orderCards } from "../../redux/actions";

function Order({ order }) {

    const dispatch = useDispatch()

    const handleOrder = (evento) => {
        dispatch(orderCards(evento.target.value))
    }

    return (
        <div>
            <div>
                <select name="order"
                    defaultValue='orderDrivers'
                    onChange={handleOrder}>
                    <option value="orderDrivers" disabled='disabled'>order...</option>
                    <option value="ascendente">Ascendente</option>
                    <option value="descendente">Descendente</option>
                </select>
            </div>
            {order && order.map(driver => (
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
        order: state.order
    }
}

export default connect(mapStateToProps)(Order)