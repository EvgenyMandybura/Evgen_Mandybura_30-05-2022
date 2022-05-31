import {
  GET_LIST_MOVIES,
  GET_LIST_MOVIES_SUCCESS,
  GET_LIST_MOVIES_CLEAR,
  GET_LIST_MOVIES_ERROR,
  GET_MOVIE,
  GET_MOVIE_CLEAR,
  GET_MOVIE_ERROR,
  GET_MOVIE_SUCCESS,
  ADD_MOVIE_TO_FAVORITES,
  ADD_MOVIE_TO_FAVORITES_SUCCESS,
  ADD_MOVIE_TO_FAVORITES_ERROR,
  GET_FAVORITE_LIST_MOVIES,
  GET_FAVORITE_LIST_MOVIES_SUCCESS,
  GET_FAVORITE_LIST_MOVIES_ERROR,
  GET_FAVORITE_LIST_MOVIES_CLEAR,
  REMOVE_MOVIE_FROM_FAVORITES,
  REMOVE_MOVIE_FROM_FAVORITES_ERROR,
  REMOVE_MOVIE_FROM_FAVORITES_SUCCESS,
  FILTER_LIST_OF_MOVIES,
  FILTER_LIST_OF_MOVIES_SUCCESS,
  FILTER_LIST_OF_MOVIES_ERROR,
} from "./actionTypes";

export const getListMovies = () => {
  return {
    payload: {},
    type: GET_LIST_MOVIES,
  };
};
export const getListMoviesSuccess = (data) => {
  return {
    payload: data,
    type: GET_LIST_MOVIES_SUCCESS,
  };
};
export const getListMoviesError = ({ message }) => {
  return {
    payload: { message },
    type: GET_LIST_MOVIES_CLEAR,
  };
};
export const getListMoviesClear = () => {
  return {
    type: GET_LIST_MOVIES_ERROR,
  };
};

export const getMovie = (MovieId, history) => {
  return {
    payload: { MovieId, history },
    type: GET_MOVIE,
  };
};

export const getMovieSuccess = ({ data }) => {
  return {
    payload: data,
    type: GET_MOVIE_SUCCESS,
  };
};

export const getMovieError = ({ message = "Unknown error" }) => {
  return {
    payload: { message },
    type: GET_MOVIE_ERROR,
  };
};

export const clearMovieFetched = () => {
  return {
    type: GET_MOVIE_CLEAR,
  };
};

export const addMovieToFavorites = (movie) => {
  return {
    payload: movie,
    type: ADD_MOVIE_TO_FAVORITES,
  };
};

export const addMovieToFavoritesSuccess = (data) => {
  return {
    payload: data,
    type: ADD_MOVIE_TO_FAVORITES_SUCCESS,
  };
};

export const addMovieToFavoritesError = (message = "Unknown error") => {
  return {
    payload: { message },
    type: ADD_MOVIE_TO_FAVORITES_ERROR,
  };
};

export const getFavoriteListMovies = () => {
  return {
    payload: {},
    type: GET_FAVORITE_LIST_MOVIES,
  };
};
export const getFavoriteListMoviesSuccess = (data) => {
  return {
    payload: data,
    type: GET_FAVORITE_LIST_MOVIES_SUCCESS,
  };
};
export const getFavoriteListMoviesError = ({ message }) => {
  return {
    payload: { message },
    type: GET_FAVORITE_LIST_MOVIES_ERROR,
  };
};
export const getFavoriteListMoviesClear = () => {
  return {
    type: GET_FAVORITE_LIST_MOVIES_CLEAR,
  };
};

export const removeMovieFromFavorites = (movieId) => {
  return {
    payload: movieId,
    type: REMOVE_MOVIE_FROM_FAVORITES,
  };
};

export const removeMovieFromFavoritesSuccess = (data) => {
  return {
    payload: data,
    type: REMOVE_MOVIE_FROM_FAVORITES_SUCCESS,
  };
};
export const removeMovieFromFavoritesError = ({ message }) => {
  return {
    payload: { message },
    type: REMOVE_MOVIE_FROM_FAVORITES_ERROR,
  };
};

export const filterMovies = (genre) => {
  return {
    payload: genre,
    type: FILTER_LIST_OF_MOVIES,
  };
};

export const filterMoviesSuccess = (data) => {
  return {
    payload: data,
    type: FILTER_LIST_OF_MOVIES_SUCCESS,
  };
};

export const filterMoviesError = ({ message = "Unknown error" }) => {
  return {
    payload: { message },
    type: FILTER_LIST_OF_MOVIES_ERROR,
  };
};
