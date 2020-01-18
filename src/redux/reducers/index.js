import {combineReducers} from 'redux';

import loginReducer from './auth/index';
import productReducer from './product/productReducer';
import etalaseReducer from './etalase/etalase';

const reducers = combineReducers({
  loginReducer,
  productReducer,
  etalaseReducer,
});

export default reducers;
