import axios from 'axios';

export const GET_DRIVERS = 'GET_DRIVERS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const GET_PAGINATED_DRIVERS = 'GET_PAGINATED_DRIVERS';

export function getDrivers() {
    return async function (dispatch) {
        const response = await axios("http://localhost:5000/drivers");
        dispatch({
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

export function filterCards(teams) {
    return async function (dispatch) {
        const response = await axios(`http://localhost:3001/teams`)
    return dispatch({
        type: "FILTER",
        payload: response.data
    })
}
}

export function orderCards(order) {
    return {
        type: ORDER,
        payload: order
    }
}

export function getPaginatedDrivers(page) {
    return async function (dispatch) {
        try {
            const { driversPerPage } = initialState.pagination;
            const response = await axios.get(`http://localhost:5000/drivers?page=${page}&perPage=${driversPerPage}`)
            dispatch({
                type: GET_PAGINATED_DRIVERS,
                payload: { drivers: response.data, currentPage: page },
            });
        } catch (error) {
            console.error('Error al obtener los drivers paginados', error)
        }
    };
}

