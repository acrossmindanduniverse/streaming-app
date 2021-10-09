const initialState = {
  popularProducts: [],
  products: [],
  details: {},
  genres: [],
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
    case 'GET_GENRES': {
      return {
        ...state,
        genres: action.payload,
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
