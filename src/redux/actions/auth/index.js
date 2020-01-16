import Axios from 'axios';
import {API_URL} from 'react-native-dotenv';

export const loginAccount = ({username, password, user_type}) => {
  let url = API_URL.concat(`/login/${user_type}`)
  return {
    type: 'LOGIN_ACCOUNT',
    payload: Axios.post(url ,{
      username,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer `.concat(token),
      },
    }),
  };
};

export const registerAccount = ({name_user, email, password, role}) => {
  let url = API_URL.concat(`/register/${role}`)

  return {
    type: 'REGISTER_ACCOUNT',
    payload: Axios.post(url ,{
      name_user,
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
  };
};
