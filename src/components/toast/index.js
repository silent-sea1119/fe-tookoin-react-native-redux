import {Toast } from 'native-base';

export const showToast = (message, types) => {
    Toast.show({
      text: message,
      buttonText: 'Okay',
      type: types == 'warning' ? 'warning' : 'success',
      duration: 3000,
      position: 'bottom'
    });
  };