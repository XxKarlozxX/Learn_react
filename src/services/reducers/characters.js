import { CHARACTER_FETCH, CHARACTER_REMOVE } from '../constants/characters';

const initialState = {
    data: [],
    isFetching: false,
};

export const characters = (state = initialState, action ) => {
    const { payload, meta } = action;
    switch (action.type) {
        case CHARACTER_REMOVE:
            return {
                ...state,
                data: state.data.filter( item =>  item.name !== meta)
            };
        case  `${CHARACTER_FETCH}_PENDING`:
            return {
                ...state,
                isFetching: true,
            };
        case `${CHARACTER_FETCH}_FULFILLED`:
            return {
                ...state,
                data: payload.data.results,
                isFetching: false,
            };
        default:
            return {...state};
    }

}

export default characters;