import Axios from 'axios';
import {API_URL} from 'react-native-dotenv';

export const loginAccount = (API_URL, data) => {
  return {
    type: 'LOGIN_ACCOUNT',
    payload: Axios.post(API_URL + '/login', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // Authorization: `Bearer `.concat(token),
      },
    }),
  };
};

export const registerAccount = ({name_user, email, password, role}) => {
  let url = API_URL.concat(`/register/${role}`);

  return {
    type: 'REGISTER_ACCOUNT',
    payload: Axios.post(
      url,
      {
        name_user,
        email,
        password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ),
  };
};
