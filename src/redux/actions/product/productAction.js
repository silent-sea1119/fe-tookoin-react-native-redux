import axios from 'axios';


export const fetchProduct = (URL) => {
  return {
    type: 'FETCH_PRODUCT',
    payload: axios.get(URL),
  };
};


export const nyokot = () => {
  return {
    type: 'NYOKOT_PRODUCT'
  };
};

