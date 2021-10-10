const initialState = {
  splashToggle: false,
  userDetails: {},
  watchlist: [],
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'SPLASH_TOGGLE_DEFAULT': {
      return {
        ...state,
        splashToggle: !state.splashToggle,
      };
    }
    case 'SPLASH_TOGGLE': {
      return {
        ...state,
        splashToggle: true,
      };
    }
    case 'GET_USER_DETAILS': {
      return {
        ...state,
        userDetails: action.payload,
      };
    }
    case 'ADD_OR_REMOVE_TO_WATCH_LIST': {
      return {
        ...state,
      };
    }
    case 'GET_WATCH_LIST_REJECTED': {
      return {
        ...state,
      };
    }
    case 'GET_WATCH_LIST': {
      return {
        ...state,
        watchlist: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
