import {combineReducers} from 'redux';

import defaultReducer from './default-reducer';

const rootReducers = combineReducers({
    defo: defaultReducer
})

export default rootReducers;