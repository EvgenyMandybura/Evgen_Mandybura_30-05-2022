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
}

export default new MoviesService();
