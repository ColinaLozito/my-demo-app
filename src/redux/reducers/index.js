import {combineReducers} from 'redux';
import dataReducer from './data';
import userReducer from './user';

export default combineReducers({
  data: dataReducer,
  user: userReducer,
});
