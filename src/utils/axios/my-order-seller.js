import axios from 'axios'
import {API_URL} from 'react-native-dotenv';


export const getTransactionStatusSeller = (token) => {
    return axios
      .get(API_URL.concat('/transaction/seller/8'),{
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer `.concat(token)
        }
      })
      .then(res => {
        return  res.data;
      })
      .catch( err => { return err})
  };