import React, { useEffect, useState } from "react";
import { Card, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./ListOfMovies.scss";
import {
  addMovieToFavorites,
  getListMovies,
  getListMoviesClear,
} from "../../store/movies/actions";
import useModal from "../../hooks/useModal";
import imgPlaceholder from "../../assets/ic-placeholder.svg";
import { ReactComponent as StarIcon } from "../../assets/ic-star.svg";
import checkIsMovieExistInList from "../../helpers/checkIsMivieExistinList";
import MovieDetailsModal from "../modal/MovieModalDetails";

const ListOfMoviesListView = ({
  allMoviesState,
  getListMovies,
  getListMoviesClear,
  addMovieToFavorites,
}) => {
  const [ready, updateReady] = useState(false);
  useEffect(() => {
    const fetchMovies = () => {
      getListMovies();
    };
    fetchMovies();
    updateReady(true);
    return () => {
      getListMoviesClear();
    };
  }, [getListMoviesClear, getListMovies]);

  const [modalVisible, toggleModal] = useModal();

  const [currentMovieID, setCurrentMovieID] = useState(null);

  const onClickMovie = (id) => {
    setCurrentMovieID(id);
    toggleModal();
  };

  const handleToFavoriteClick = (id) => {
    const indexOfObject = allMoviesState.data.findIndex((object) => {
      return object.id === id;
    });
    addMovieToFavorites(allMoviesState.data[indexOfObject]);
  };

  return (
    <div>
      <Row>
        <Col>
          {ready &&
            allMoviesState?.data?.map((movie) => (
              <Card
                className="movieList"
                onClick={() => onClickMovie(movie.id)}
                key={movie.id}
              >
                <Row>
                  <Col>
                    <CardImg
                      src={!!movie.img ? movie.img : imgPlaceholder}
                      alt="Card image"
                      className="movieCardImg"
                    />
                  </Col>
                  <StarIcon
                    className={
                      movie?.id &&
                      checkIsMovieExistInList(
                        movie.id,
                        allMoviesState.favouriteList
                      )
                        ? "favoriteStarActive"
                        : "favoriteStarInActive"
                    }
                    onClick={(event) => {
                      event.stopPropagation();
                      handleToFavoriteClick(movie.id);
                    }}
                  />

                  <Col>
                    <CardTitle tag="h5">{movie.name}</CardTitle>
                    <CardTitle tag="h5">{movie.year}</CardTitle>
                    <CardText className="movieListDescription">
                      {movie.description}{" "}
                    </CardText>
                    <div className="movieListBadges">
                      {movie?.genres?.map((genre) => (
                        <div className="modalBadge">{genre}</div>
                      ))}
                    </div>
                  </Col>
                </Row>
              </Card>
            ))}
        </Col>
      </Row>
      <MovieDetailsModal
        isOpen={modalVisible}
        onCancel={toggleModal}
        movieId={currentMovieID}
      />
    </div>
  );
};

const mapStateToProps = ({ movies }) => ({ allMoviesState: movies });
export default withRouter(
  connect(mapStateToProps, {
    getListMovies,
    getListMoviesClear,
    addMovieToFavorites,
  })(ListOfMoviesListView)
);
