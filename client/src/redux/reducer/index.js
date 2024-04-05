import { GET_DRIVERS, GET_BY_NAME, FILTER_TEAMS, ORDER, GET_PAGINATION_DRIVERS } from "../actions";

let initialState = { allDrivers: [], driversCopy: [], allTeam: [], pagination: [] };

function rootReducer(state = initialState, action) {
    // console.log(action);
    switch (action.type) {
        case GET_DRIVERS:
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
        case FILTER_TEAMS:
            return {
                ...state,
                allTeam: action.payload
            };
        case ORDER:
            const { orden, tipo } = action.payload;
            if (tipo === "Alfabetico") {
                if (orden === "desc") state.driversCopy.sort((a, b) => a.name.forename.localeCompare(b.name.forename));
                if (orden === "asc") state.driversCopy.sort((a, b) => b.name.forename.localeCompare(a.name.forename));
            };
            if (tipo === "Nacimiento") {
                if (orden === "desc") state.driversCopy.sort((a, b) => new Date(b.dob) - new Date(a.dob));
                if (orden === "asc") state.driversCopy.sort((a, b) => new Date(a.dob) - new Date(b.dob));
            };
            return {
                ...state,
                allDrivers: [...state.driversCopy]
            };
        case GET_PAGINATION_DRIVERS:
            return {
                ...state,
                pagina: action.payload
            };

        default:
            return state;
    }
};

export default rootReducer;