const initialState = {
  popularProducts: [],
  products: [],
  details: {},
};

const discover = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_LIST': {
      return {
        ...state,
        popularProducts: action.payload,
      };
    }
    case 'GET_LIST': {
      return {
        ...state,
        products: action.payload,
      };
    }
    case 'GET_DETAILS': {
      return {
        ...state,
        details: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default discover;
