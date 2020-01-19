import {combineReducers} from 'redux';

import loginReducer from './auth/index';
import productReducer from './product/productReducer';
import etalaseReducer from './etalase/etalase';
import cartReducer from './cart/cartReducer'

const reducers = combineReducers({
  loginReducer,
  productReducer,
  etalaseReducer,
  cartReducer
});

export default reducers;
