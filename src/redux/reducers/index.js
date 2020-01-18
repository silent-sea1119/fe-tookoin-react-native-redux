import { combineReducers } from "redux";

import loginReducer from './auth/index'
import productReducer from './product/productReducer'

const reducers = combineReducers({
  loginReducer,
  productReducer
});

export default reducers;