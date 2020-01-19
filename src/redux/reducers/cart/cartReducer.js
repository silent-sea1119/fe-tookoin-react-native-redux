const initialState = {
  cart: [],

  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const cartReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CART_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'FETCH_CART_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'FETCH_CART_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        cart: action.payload,
      };

    default:
      return prevState;
  }
};

export default cartReducer;
