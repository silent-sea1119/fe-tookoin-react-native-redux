const initialState = {
  product: [],

  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const productReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCT_PENDING':
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'FETCH_PRODUCT_REJECTED':
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
      };
    case 'FETCH_PRODUCT_FULFILLED':
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        product: action.payload ,
      };

      case 'NYOKOT_PRODUCT_FULFILLED':
      return {
        ...prevState,
      };
      
    default:
      return prevState;
  }
  
};


export default productReducer;
