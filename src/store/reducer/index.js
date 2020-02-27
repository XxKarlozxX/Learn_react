import { combineReducers } from 'redux';

import characters from '../../services/reducers/characters'

export const rootReducer = combineReducers({
    characters
});

export default rootReducer;