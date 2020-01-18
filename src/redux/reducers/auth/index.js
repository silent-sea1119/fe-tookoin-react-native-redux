const initialState = {
  loginState: [],
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const loginAccount = (prevState = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_ACCOUNT_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'LOGIN_ACCOUNT_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'LOGIN_ACCOUNT_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        loginState: action.payload,
      };
    default:
      return prevState;
  }
};

export default loginAccount;
