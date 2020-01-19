const initialState = {
    etalase: [],
  
    isPending: false,
    isRejected: false,
    isFulfilled: false,
  };
  
  const etalaseReducer = (prevState = initialState, action) => {
    switch (action.type) {
      case 'FETCH_ETALASE_PENDING':
        return {
          ...prevState,
          isPending: true,
          isRejected: false,
          isFulfilled: false,
        };
      case 'FETCH_ETALASE_REJECTED':
        return {
          ...prevState,
          isPending: false,
          isRejected: true,
        };
      case 'FETCH_ETALASE_FULFILLED':
        return {
          ...prevState,
          isPending: false,
          isFulfilled: true,
          etalase: action.payload ,
        };
        
      default:
        return prevState;
    }
    
  };
  
  
  export default etalaseReducer;
  