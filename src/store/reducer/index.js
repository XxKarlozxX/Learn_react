import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import characters from '../../services/reducers/characters'

export const rootReducer = combineReducers({
    characters,
    form: formReducer
});

export default rootReducer;