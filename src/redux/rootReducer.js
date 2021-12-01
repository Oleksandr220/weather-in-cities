import { combineReducers } from 'redux';
import weatherReducer from './weatherCity/reducer';
import citiesReducer from './citiesItems/reducer';

const rootReducer = combineReducers({
  weatherReducer,
  citiesReducer,
});

export default rootReducer;
