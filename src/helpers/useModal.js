const checkIsMovieExistInList = (movieId, favoriteList) => {
  const id = favoriteList.length + 1;
  return favoriteList.some(function (movie) {
    return movie.id === movieId;
  });
};

export default checkIsMovieExistInList;
