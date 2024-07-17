import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_TEAMS = 'GET_TEAMS';
export const FILTER_BY_TEAM = 'FILTER_BY_TEAM';
export const ORDER = 'ORDER';
export const GET_PAGINATION_DRIVERS = 'GET_PAGINATION_DRIVERS';

export function getDrivers() {
    return async function (dispatch) {
        const response = await axios("http://localhost:3001/drivers");
        dispatch({
            type: "GET_DRIVERS",
            payload: response.data
        })
    };
};


export function getByName(name) {
    return async function (dispatch) {
        try {
            const response = await axios(`http://localhost:3001/drivers/name?forename=${name}`);
            return dispatch({
                type: "GET_BY_NAME",
                payload: response.data
            }) 
        } catch (error) {
            alert(error.response.data.error)
        };
    };
};

export function getTeams() {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/teams`);
        return dispatch({
            type: "GET_TEAMS",
            payload: response.data
        })
    };
};

export function filterTeams(team) {
    return {
        type: 'FILTER_BY_TEAM',
        payload: team
    };
};

export function orderCards(orden, tipo) {
    return {
        type: ORDER,
        payload: { orden, tipo }
    };
};

export const getPaginationDrivers = (drivers, pagination) => {
    const numberDrivers = 9;
    const offset = ((pagination - 1) * numberDrivers);
    const limit = offset + numberDrivers;
    const pagina = drivers.slice(offset, limit);
    return {
        type: "GET_PAGINATION_DRIVERS",
        payload: pagina
    };
};

