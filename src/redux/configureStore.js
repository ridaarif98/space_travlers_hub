import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import missionsReducer from './missions/missions';
import rocketsReducer from './rockets/rockets';

const reducer = combineReducers({
  rocketsReducer,
  missionsReducer,
  // additional reducers could be added here
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
