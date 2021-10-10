import {request} from '../../helpers/request';
import {API_URL, API_KEY} from '@env';

export const splashToggleFunc = () => dispatch => {
  dispatch({
    type: 'SPLASH_TOGGLE_DEFAULT',
  });
};

export const splashToggleDefault = () => dispatch => {
  dispatch({
    type: 'SPLASH_TOGGLE',
  });
};

export const getUserDetails = session_id => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/account?api_key=${API_KEY}&session_id=${session_id}`,
  );
  dispatch({
    type: 'GET_USER_DETAILS',
    payload: data,
  });
};

export const addOrRemoveToWatchList =
  (account_id, session_id, setData) => async dispatch => {
    const {data} = await request().post(
      `${API_URL}/account/${account_id}/watchlist?api_key=${API_KEY}&session_id=${session_id}`,
      {
        media_type: setData.media_type,
        media_id: setData.media_id,
        watchlist: setData.watchlist,
      },
    );
    dispatch({
      type: 'ADD_OR_REMOVE_TO_WATCH_LIST',
      payload: data,
    });
  };

export const getWatchList =
  (account_id, name, session_id) => async dispatch => {
    try {
      const {data} = await request().get(
        `${API_URL}/account/${account_id}/watchlist/${name}?api_key=${API_KEY}&language=en-US&session_id=${session_id}&sort_by=created_at.asc&page=1`,
      );
      dispatch({
        type: 'GET_WATCH_LIST',
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: 'GET_WATCH_LIST_REJECTED',
        error: err.response.data,
      });
    }
  };
