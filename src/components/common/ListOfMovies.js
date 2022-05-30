import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./ListOfMovies.scss";
import {
  addMovieToFavorites,
  getListMovies,
  getListMoviesClear,
} from "../../store/movies/actions";
import MovieDetailsModal from "../modal/MovieModalDetails";
import useModal from "../../hooks/useModal";
import imgPlaceholder from "../../assets/ic-placeholder.svg";
import { ReactComponent as StarIcon } from "../../assets/ic-star.svg";
import checkIsMovieExistInList from "../../helpers/checkIsMivieExistinList";

const ListOfMovies = ({
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
  /*
  for (let i = 0; i < allMoviesState.favouriteList.length; i++) {
    for (let j = 0; j < allMoviesState.data.length; j++) {
      if (allMoviesState.favouriteList[i] === allMoviesState.data[j]) {
        allMoviesState.data[j].isFavorite = true;
      } else {
        allMoviesState.data[j].isFavorite = false;
      }
    }
  }
*/
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
    <div className="moviesContainer">
      <Row>
        <Col>
          {ready &&
            allMoviesState?.data?.map((movie) => (
              <Card
                className="movieCard"
                onClick={() => onClickMovie(movie.id)}
                key={movie.id}
              >
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

                <CardImg
                  src={!!movie.img ? movie.img : imgPlaceholder}
                  alt="Card image"
                  className="movieCardImg"
                />
                <CardBody className="movieCardDescription">
                  <CardTitle tag="h5">{movie.name}</CardTitle>
                  <CardSubtitle tag="h6">{movie.year}</CardSubtitle>
                </CardBody>
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
  })(ListOfMovies)
);
