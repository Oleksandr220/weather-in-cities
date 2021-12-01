import { createStore } from 'redux';
import rootReducer from './rootReducer';
import loadFromLocalStorage from '../services/loadFromLocalStorage';
import saveToLocalStorage from '../services/saveToLocalStrage';

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
