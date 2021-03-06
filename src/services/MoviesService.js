import axios from "axios";

class MoviesService {
  getAllList() {
    return axios.get(
      `https://my-json-server.typicode.com/moviedb-tech/movies/list`
    );
  }

  getMovie(id) {
    return axios.get(
      `https://my-json-server.typicode.com/moviedb-tech/movies/list/${id}`
    );
  }

  filterMovies(genre) {
    console.log("genre", genre);
    return this.getAllList().then((response) =>
      response.data.filter((movie) => movie.genres.includes(genre))
    );
  }
}

export default new MoviesService();
