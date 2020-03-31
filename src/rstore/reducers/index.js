import tabChangeReducer from "./tabChangeReducer.js";
import fetchResultsReducer from "./fetchResultsReducer";
import createUserReducer from "./fetchResultsReducer";
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
  tabChangeReducer,
  fetchResultsReducer,
  createUserReducer,
  form: reduxFormReducer
});