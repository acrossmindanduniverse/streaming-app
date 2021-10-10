import {request} from '../../helpers/request';
import {API_URL, API_KEY} from '@env';

export const getPopularProducts = name => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/${name}/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );
  dispatch({
    type: 'GET_POPULAR_LIST',
    payload: data,
  });
};

export const getProducts = name => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/discover/${name}?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free
      `,
  );
  dispatch({
    type: 'GET_LIST',
    payload: data,
  });
};

export const getDetails = (name, id) => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/${name}/${id}?api_key=${API_KEY}&language=en-US`,
  );
  dispatch({
    type: 'GET_DETAILS',
    payload: data,
  });
};
