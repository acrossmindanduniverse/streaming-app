import {request} from '../../helpers/request';
import {API_URL, API_KEY, ACCESS_TOKEN} from '@env';

export const createGuestSession = () => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/authentication/guest_session/new?api_key=${API_KEY}`,
  );
  dispatch({
    type: 'CREATE_GUEST_SESSION',
    payload: data,
  });
};

export const createRequestToken = () => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/authentication/token/new?api_key=${API_KEY}`,
  );
  dispatch({
    type: 'CREATE_ REQUEST_TOKEN',
    payload: data,
  });
};

export const createSessionWithLogin = setData => async dispatch => {
  try {
    const {data} = await request().post(
      `${API_URL}/authentication/token/validate_with_login?api_key=${API_KEY}`,
      {
        username: setData.username,
        password: setData.password,
        request_token: setData.request_token,
      },
    );
    dispatch({
      type: 'CREATE_SESSION_WITH_LOGIN',
      payload: data,
    });
  } catch (err) {
    dispatch({
      payload: 'CREATE_SESSION_WITH_LOGIN_REJECTED',
      error: err.response.data,
    });
  }
};

export const createSessionWithAccessToken = () => async dispatch => {
  const {data} = await request().post(
    `${API_URL}/authentication/session/convert/4?api_key=${API_KEY}`,
    {
      access_token: ACCESS_TOKEN,
    },
  );
  dispatch({
    type: 'CREATE_SESSION_WITH_ACCESS_TOKEN',
    payload: data,
  });
};
