import { combineReducers } from 'redux';
import forecastReducer from './forecastReducer';
import userReducer from './userReducer';

export default combineReducers({
  forecast: forecastReducer,
  user: userReducer
});
