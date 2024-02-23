import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_BY_NAME = 'GET_BY_NAME';

export function getDrivers() {
    return async function (dispatch) {
        const response = await axios("http://localhost:5000/drivers");
        return dispatch({
            type: "GET_DRIVERS",
            payload: response.data            
        })
    }
}


export function getByName(name) {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/drivers/?forename=${name}`);
        return dispatch({
            type: "GET_BY_NAME",
            payload: response.data            
        })
    }
}