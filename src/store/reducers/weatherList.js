const initialState={
    persistedList:[]
}

export default function weatherList(state = initialState, action) {
    switch (action.type) {
        case 'ADD_WEATHER':
            return {...state,  persistedList:action.persistedList};
        default:
            return state;
    }
}