import checkIsMovieExistInList from "../helpers/checkIsMivieExistinList";

class FavoritesService {
  getAllList() {
    let favoriteList = JSON.parse(localStorage.getItem("favoritelist")) || [];
    return favoriteList;
  }

  addToList(movie) {
    let favoriteList = JSON.parse(localStorage.getItem("favoritelist")) || [];
    if (!checkIsMovieExistInList(movie.id, favoriteList)) {
      favoriteList.push(movie);
      localStorage.setItem("favoritelist", JSON.stringify(favoriteList));
      return favoriteList;
    } else this.addToList(movie.id);
  }

  removeFromList(movieId) {
    let favoriteList = JSON.parse(localStorage.getItem("favoritelist")) || [];
    const indexOfObject = favoriteList.findIndex((object) => {
      return object.id === movieId;
    });
    favoriteList.splice(indexOfObject, 1);
    localStorage.setItem("favoritelist", JSON.stringify(favoriteList));
    return favoriteList;
  }
}

export default new FavoritesService();
