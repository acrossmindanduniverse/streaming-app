const initialState = {
  splashToggle: false,
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
    default: {
      return {
        ...state,
      };
    }
  }
};

export default user;
