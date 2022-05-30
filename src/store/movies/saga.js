import { all, call, fork, put, takeEvery } from "redux-saga/effects";

import {
  getListMoviesSuccess,
  getListMoviesError,
  getMovieSuccess,
  getMovieError,
  addMovieToFavoritesSuccess,
  addMovieToFavoritesError,
  getFavoriteListMoviesSuccess,
  getFavoriteListMoviesError,
  removeMovieFromFavoritesSuccess,
  removeMovieFromFavoritesError,
} from "./actions";
import {
  ADD_MOVIE_TO_FAVORITES,
  GET_FAVORITE_LIST_MOVIES,
  GET_LIST_MOVIES,
  GET_MOVIE,
  REMOVE_MOVIE_FROM_FAVORITES,
} from "./actionTypes";
import MoviesService from "../../services/MoviesService";
import FavoritesService from "../../services/FavoritesService";

const getMoviesListAsync = async () => {
  return await MoviesService.getAllList();
};

const getMovieAsync = async (id) => {
  return await MoviesService.getMovie(id);
};

const addToFavorite = async (movie) => {
  return await FavoritesService.addToList(movie);
};

const getFavoriteMoviesListAsync = async () => {
  return await FavoritesService.getAllList();
};

const removefromFavoriteAsync = async (movieId) => {
  return await FavoritesService.removeFromList(movieId);
};

function* getMoviesList() {
  try {
    const response = yield call(getMoviesListAsync);
    yield put(getListMoviesSuccess(response));
  } catch (error) {
    yield put(getListMoviesError(error));
  }
}

function* getMovie({ payload: { MovieId } }) {
  try {
    const response = yield call(getMovieAsync, MovieId);
    yield put(getMovieSuccess(response));
  } catch (error) {
    yield put(getMovieError(error));
  }
}

function* addMovieToFavorite({ payload: movie }) {
  try {
    const response = yield call(addToFavorite, movie);
    yield put(addMovieToFavoritesSuccess(response));
  } catch (error) {
    yield put(addMovieToFavoritesError());
  }
}

function* removeFromFavorites({ payload: movieId }) {
  try {
    const response = yield call(removefromFavoriteAsync, movieId);
    yield put(removeMovieFromFavoritesSuccess(response));
  } catch (error) {
    yield put(removeMovieFromFavoritesError());
  }
}

function* getFavoriteMoviesList() {
  try {
    const response = yield call(getFavoriteMoviesListAsync);
    yield put(getFavoriteListMoviesSuccess(response));
  } catch (error) {
    yield put(getFavoriteListMoviesError(error));
  }
}

export function* watchGetMoviesList() {
  yield takeEvery(GET_LIST_MOVIES, getMoviesList);
}

export function* watchGetMovie() {
  yield takeEvery(GET_MOVIE, getMovie);
}

export function* watchAddToFavorite() {
  yield takeEvery(ADD_MOVIE_TO_FAVORITES, addMovieToFavorite);
}

export function* watchGetFavoriteMoviesList() {
  yield takeEvery(GET_FAVORITE_LIST_MOVIES, getFavoriteMoviesList);
}

export function* watchRemoveFromMoviesList() {
  yield takeEvery(REMOVE_MOVIE_FROM_FAVORITES, removeFromFavorites);
}

function* MoviesSaga() {
  yield all([
    fork(watchGetMoviesList),
    fork(watchGetMovie),
    fork(watchAddToFavorite),
    fork(watchGetFavoriteMoviesList),
    fork(watchRemoveFromMoviesList),
  ]);
}

export default MoviesSaga;
