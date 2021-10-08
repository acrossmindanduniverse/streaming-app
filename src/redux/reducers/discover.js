const initialState = {
  movies: [],
  moviePopularDetails: {},
};

const discover = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_POPULAR_LIST': {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case 'GET_MOVIE_DETAILS': {
      return {
        ...state,
        movieDetails: action.payload,
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
