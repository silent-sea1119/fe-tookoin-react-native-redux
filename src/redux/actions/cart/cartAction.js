import axios from 'axios';


export const fetchCart = (URL, config) => {
  return {
    type: 'FETCH_CART',
    payload: axios.get(URL, config),
  };
};

export const postToCartAction = (URL, data, config) => {
  return {
    type: 'POST_CART',
    payload: axios.get(URL, config),
  };
};