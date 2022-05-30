import React, { useEffect } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./ListOfMovies.scss";
import {
  removeMovieFromFavorites,
  getFavoriteListMovies,
} from "../../store/movies/actions";

const FavoriteList = ({
  allMoviesState,
  removeMovieFromFavorites,
  getFavoriteListMovies,
}) => {
  useEffect(() => {
    const fetchFavoritesMovies = () => {
      getFavoriteListMovies();
    };
    fetchFavoritesMovies();
  }, [getFavoriteListMovies]);

  const onClickMovie = (id) => {
    removeMovieFromFavorites(id);
  };

  return (
    <div className="favoriteContainer">
      Favorite List:
      <ListGroup>
        {allMoviesState?.favouriteList?.map(
          (movie) =>
            !!movie.name && (
              <ListGroupItem key={movie.id}>
                <div className="favorite">
                  <h6>{movie?.name}</h6>
                  <Button
                    onClick={() => onClickMovie(movie.id)}
                    className="favoriteRemoveBtn"
                  >
                    X
                  </Button>
                </div>
              </ListGroupItem>
            )
        )}
      </ListGroup>
    </div>
  );
};
const mapStateToProps = ({ movies }) => ({ allMoviesState: movies });
export default withRouter(
  connect(mapStateToProps, {
    removeMovieFromFavorites,
    getFavoriteListMovies,
  })(FavoriteList)
);
