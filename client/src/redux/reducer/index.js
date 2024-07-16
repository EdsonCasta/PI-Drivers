import { GET_DRIVERS, GET_BY_NAME, GET_TEAMS, FILTER_BY_TEAM, ORDER } from "../actions";

let initialState = {
    allDrivers: [],
    driversCopy: [],
    allTeam: [],
    filteredDrivers: [],
    selectedTeam: '',
    order: { orden: '', tipo: '' },
    pagination: []
};

function applyFilters(drivers, team, order) {
    let filteredDrivers = drivers;

    if (team) {
        filteredDrivers = filteredDrivers.filter(driver => driver.Teams && driver.Teams.includes(team));
    }

    if (order.tipo === "Alfabetico") {
        if (order.orden === "desc") filteredDrivers.sort((a, b) => a.Forename.localeCompare(b.Forename));
        if (order.orden === "asc") filteredDrivers.sort((a, b) => b.Forename.localeCompare(a.Forename));
    } else if (order.tipo === "Nacimiento") {
        if (order.orden === "desc") filteredDrivers.sort((a, b) => new Date(b.BirthDate) - new Date(a.BirthDate));
        if (order.orden === "asc") filteredDrivers.sort((a, b) => new Date(a.BirthDate) - new Date(b.BirthDate));
    }

    return filteredDrivers;
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DRIVERS:
            return {
                ...state,
                allDrivers: action.payload,
                driversCopy: action.payload,
                filteredDrivers: applyFilters(action.payload, state.selectedTeam, state.order)
            };
        case GET_BY_NAME:
            return {
                ...state,
                allDrivers: action.payload
            };
        case GET_TEAMS:
            return {
                ...state,
                allTeam: action.payload
            };
        case FILTER_BY_TEAM:
            return {
                ...state,
                selectedTeam: action.payload,
                filteredDrivers: applyFilters(state.driversCopy, action.payload, state.order)
            };
        case ORDER:
            const { orden, tipo } = action.payload;
            return {
                ...state,
                order: { orden, tipo },
                filteredDrivers: applyFilters(state.driversCopy, state.selectedTeam, { orden, tipo })
            };
            
        // case GET_PAGINATION_DRIVERS:
        //     return {
        //         ...state,
        //         pagina: action.payload
        //     };

        default:
            return state;
    }
};

export default rootReducer;