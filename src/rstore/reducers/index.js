import tabChangeReducer from "./tabChangeReducer.js";
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  tabChangeReducer,
  form: reduxFormReducer
});