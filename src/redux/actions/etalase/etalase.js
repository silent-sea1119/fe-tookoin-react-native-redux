import axios from 'axios';


export const fetchEtalase = (URL, config) => {
  return {
    type: 'FETCH_ETALASE',
    payload: axios.get(URL, config),
  };
};

