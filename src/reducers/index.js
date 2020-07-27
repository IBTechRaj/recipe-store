import { combineReducers } from 'redux';
import fetchReducer from './fetchReducer';
import filter from './filter';

export default combineReducers({
  recipes: fetchReducer,
  filter,
});
