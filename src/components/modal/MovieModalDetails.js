import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import styles from "./MovieModalDetails.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { clearMovieFetched, getMovie } from "../../store/movies/actions";
import imgPlaceholder from "../../assets/ic-placeholder.svg";

const MovieDetailsModal = ({
  isOpen,
  onCancel,
  movieId,
  clearMovieFetched,
  getMovie,
  allMoviesState,
}) => {
  const { item } = allMoviesState;
  const [ready, updateReady] = useState(false);

  useEffect(() => {
    const fetchMovie = () => {
      getMovie(movieId);
    };
    fetchMovie();
    updateReady(true);
    return () => {
      clearMovieFetched();
    };
  }, [movieId, clearMovieFetched, getMovie]);

  return (
    <Modal
      isOpen={isOpen}
      centered
      size="xl"
      toggle={() => onCancel()}
      className={styles.modal}
    >
      {ready && !!item && (
        <ModalBody className={styles.modalBody}>
          <Button
            className={styles.modalBtn}
            color="danger"
            onClick={() => onCancel()}
          >
            X
          </Button>
          <div className="d-flex flex-row justify-content-center">
            <Card className={styles.modalContent}>
              <Row>
                <Col xs="12" md="6">
                  <CardImg
                    src={!!item.img ? item.img : imgPlaceholder}
                    alt="Card image"
                    className={styles.modalImg}
                  />
                </Col>

                <Col>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.description}
                  </CardSubtitle>
                </Col>
              </Row>
              <Row>
                <Col>
                  <CardText>{item.year}</CardText>
                  <div>
                    {item?.genres?.map((genre) => (
                      <div className="modalBadge">{genre}</div>
                    ))}
                  </div>
                </Col>
                <Col xs="12" md="6">
                  <CardText>
                    {" "}
                    <b>Director:</b> {item.director}
                  </CardText>
                  <b> Starring: </b>
                  {item?.starring?.map((star) => (
                    <span>{star}, </span>
                  ))}
                </Col>
              </Row>
            </Card>
          </div>
        </ModalBody>
      )}
    </Modal>
  );
};

const mapStateToProps = ({ movies }) => ({ allMoviesState: movies });
export default withRouter(
  connect(mapStateToProps, { getMovie, clearMovieFetched })(MovieDetailsModal)
);
