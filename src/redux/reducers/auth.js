const initialState = {
  session: {},
  requestToken: {},
  loginSession: {},
  sessionWithAccessToken: {},
  loginErrMsg: '',
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
        loginErrMsg: action.error,
      };
    }
    case 'CREATE_SESSION_WITH_ACCESS_TOKEN': {
      return {
        ...state,
        sessionWithAccessToken: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default auth;
