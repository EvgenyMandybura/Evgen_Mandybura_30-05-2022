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
  REMOVE_MOVIE_FROM_FAVORITES,
  ADD_MOVIE_TO_FAVORITES_ERROR,
  ADD_MOVIE_TO_FAVORITES_SUCCESS,
  GET_FAVORITE_LIST_MOVIES,
  GET_FAVORITE_LIST_MOVIES_SUCCESS,
  GET_FAVORITE_LIST_MOVIES_ERROR,
  REMOVE_MOVIE_FROM_FAVORITES_SUCCESS,
  REMOVE_MOVIE_FROM_FAVORITES_ERROR,
} from "./actionTypes";

const initialState = {
  data: [],
  favouriteList: [],
  selectedMovie: null,
  item: null,
  error: "",
  loading: false,
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_MOVIES:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_LIST_MOVIES_SUCCESS:
      state = {
        ...state,
        data: action.payload.data,
        loading: false,
      };
      break;
    case GET_LIST_MOVIES_CLEAR:
      state = {
        ...state,
        loading: false,
      };
      break;
    case GET_LIST_MOVIES_ERROR:
      state = {
        ...state,
        data: [],
        error: "",
      };
      break;

    case GET_MOVIE:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_MOVIE_SUCCESS:
      state = {
        ...state,
        item: action.payload,
        loading: false,
      };
      break;
    case GET_MOVIE_ERROR:
      state = {
        ...state,
        loading: false,
      };
      break;
    case GET_MOVIE_CLEAR:
      state = {
        ...state,
        item: null,
        loading: false,
      };
      break;

    case ADD_MOVIE_TO_FAVORITES:
      state = {
        ...state,
        selectedMovie: action.payload,
      };
      break;

    case ADD_MOVIE_TO_FAVORITES_SUCCESS:
      state = {
        ...state,
        favouriteList: action.payload,
      };
      break;

    case ADD_MOVIE_TO_FAVORITES_ERROR:
      state = {
        ...state,
        loading: false,
      };
      break;

    case GET_FAVORITE_LIST_MOVIES:
      state = {
        ...state,
        loading: true,
      };
      break;
    case GET_FAVORITE_LIST_MOVIES_SUCCESS:
      state = {
        ...state,
        favouriteList: action.payload,
        loading: false,
      };
      break;
    case GET_FAVORITE_LIST_MOVIES_ERROR:
      state = {
        ...state,
        loading: false,
      };
      break;
    case GET_FAVORITE_LIST_MOVIES_ERROR:
      state = {
        ...state,
        favouriteList: [],
        error: "",
      };
      break;

    case REMOVE_MOVIE_FROM_FAVORITES:
      state = {
        ...state,
        selectedMovie: action.payload,
        loading: false,
      };
      break;

    case REMOVE_MOVIE_FROM_FAVORITES_SUCCESS:
      state = {
        ...state,
        favouriteList: action.payload,
        loading: false,
      };
      break;

    case REMOVE_MOVIE_FROM_FAVORITES_ERROR:
      state = {
        ...state,
        loading: false,
      };
      break;

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default movies;
