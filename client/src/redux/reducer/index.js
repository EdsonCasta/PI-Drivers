import { GET_DRIVERS, GET_BY_NAME, FILTER, ORDER, GET_PAGINATED_DRIVERS } from "../actions";

let initialState = {
    allDrivers: [], driversCopy: [], team: [], pagination: {
        currentPage: 1,
        driversPerPage: 9
    }
}
console.log("initialState:", initialState);


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRIVERS:
            // console.log("GET_DRIVERS Action:", action);
            return {
                ...state,
                allDrivers: action.payload,
                driversCopy: action.payload
            };
        case GET_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload
            };
        case FILTER:
            const teamsFiltered = state.allDrivers.filter(driver => driver.teams === action.payload)
            return {
                ...state,
                team: action.payload === 'All' ? state.allDrivers : teamsFiltered
            };
        case ORDER:
            const orderDrivers = [...state.allDrivers];
            if (action.payload === 'ascendente') {
                orderDrivers.sort((a, b) => {
                    if (a && b && typeof a.forename === 'string' && typeof b.forename === 'string') {
                        return a.forename.localeCompare(b.forename);
                    } else {
                        return 0;
                    }
                });
            } else if (action.payload === 'descendente') {
                orderDrivers.sort((a, b) => {
                    if (a && b && typeof a.forename === 'string' && typeof b.forename === 'string') {
                        return b.forename.localeCompare(a.forename);
                    } else {
                        return 0;
                    }
                });
            }
            console.log("ORDER Action:", action.payload);
            return {
                ...state,
                allDrivers: orderDrivers,
            };
        case GET_PAGINATED_DRIVERS:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    currentPage: action.payload
                },
            };

        default:
            return state;
    }
}

export default rootReducer;