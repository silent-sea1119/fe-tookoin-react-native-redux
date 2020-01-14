import { combineReducers } from "redux";

import loginReducer from './auth/index'

const reducers = combineReducers({
  loginReducer,
});

export default reducers;