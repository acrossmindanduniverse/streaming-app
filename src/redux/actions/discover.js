import {request} from '../../helpers/request';
import {API_URL, API_KEY, ACCESS_TOKEN} from '@env';

export const getMovies = page => async dispatch => {
  if (page > 1) {
    const {data} = await request().get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`,
    );
    dispatch({
      type: 'GET_MOVIE_POPULAR_LIST_NEXT',
      payload: data,
    });
  } else {
    const {data} = await request().get(
      `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
    );
    dispatch({
      type: 'GET_MOVIE_POPULAR_LIST',
      payload: data,
    });
  }
};

// ${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate

// https://api.themoviedb.org/3/movie/popular?api_key=9747f279f7417d477fd0ad2f24f70225&language=en-US&page=1

export const getMovieDetails = id => async dispatch => {
  const {data} = await request().get(
    `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
  );
  dispatch({
    type: 'GET_MOVIE_DETAILS',
    payload: data,
  });
};
