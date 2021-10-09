import {request} from '../../helpers/request';
import {API_URL, API_KEY, ACCESS_TOKEN} from '@env';

export const getPopularProducts = (name, page) => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/${name}/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
  );
  dispatch({
    type: 'GET_POPULAR_LIST',
    payload: data,
  });
};

// https://api.themoviedb.org/3/discover/movie?api_key=9747f279f7417d477fd0ad2f24f70225&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=free

export const getProducts = (name, page) => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/discover/${name}?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=free
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
//
export const getGenres = name => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/genre/${name}/list?api_key=${API_KEY}&language=en-US`,
  );
  dispatch({
    type: 'GET_GENRES',
    payload: data,
  });
};
