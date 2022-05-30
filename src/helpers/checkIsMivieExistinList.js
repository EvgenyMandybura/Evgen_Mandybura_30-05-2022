const checkIsMovieExistInList = (movieId, favoriteList) => {
  return favoriteList.some(function (movie) {
    return movie.id === movieId;
  });
};

export default checkIsMovieExistInList;
