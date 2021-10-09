const initialState = {
  session: {},
  requestToken: {},
  loginSession: {},
  sessionWithAccessToken: {},
  loginErrMsg: {},
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_GUEST_SESSION': {
      return {
        ...state,
        session: action.payload,
      };
    }
    case 'CREATE_ REQUEST_TOKEN': {
      return {
        ...state,
        requestToken: action.payload,
      };
    }
    case 'CREATE_SESSION_WITH_LOGIN': {
      return {
        ...state,
        loginSession: action.payload,
        splashToggle: !state.splashToggle,
      };
    }
    case 'CREATE_SESSION_WITH_LOGIN_REJECTED': {
      return {
        ...state,
        loginErrMsg: action.error,
        splashToggle: false,
      };
    }
    case 'CREATE_SESSION_WITH_ACCESS_TOKEN': {
      return {
        ...state,
        sessionWithAccessToken: action.payload,
      };
    }
    case 'CREATE_SESSION_WITH_ACCESS_TOKEN_REJECTED': {
      return {
        ...state,
      };
    }
    case 'LOGIN_ERROR_MESSAGE_DEFAULT': {
      return {
        ...state,
        loginErrMsg: {},
      };
    }
    case 'AUTH_DEFAULT': {
      return state;
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
