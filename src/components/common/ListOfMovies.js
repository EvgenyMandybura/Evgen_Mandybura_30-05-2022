import React, { useEffect, useState } from "react";
import { Button, ButtonGroup } from "reactstrap";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import styles from "./ListOfMovies.scss";
import {
  addMovieToFavorites,
  filterMovies,
  getListMovies,
  getListMoviesClear,
} from "../../store/movies/actions";
import { ReactComponent as ListIcon } from "../../assets/list.svg";
import { ReactComponent as TableIcon } from "../../assets/table.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { options } from "../../constants/constants";
import ListOfMoviesListView from "./ListOfMoviesListView";
import ListOfMoviesTableView from "./ListOfMoviesTableView";

const ListOfMovies = ({ filterMovies }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isTableView, setIsTableView] = useState(true);

  useEffect(() => {
    if (selectedOption) {
      filterMovies(selectedOption);
    }
  }, [selectedOption, filterMovies]);

  return (
    <div className="moviesContainer">
      <div>
        <h3>Movies Gallery</h3>
        <div className="menu">
          <Dropdown
            options={options}
            onChange={({ value }) => setSelectedOption(value)}
            value={selectedOption}
            placeholder="Genre"
          />

          <ButtonGroup>
            <Button
              color="primary"
              outline
              onClick={() => setIsTableView(false)}
            >
              <ListIcon />
            </Button>
            <Button
              color="primary"
              outline
              active={isTableView}
              onClick={() => setIsTableView(true)}
            >
              <TableIcon />
            </Button>
          </ButtonGroup>
        </div>

        {isTableView ? <ListOfMoviesTableView /> : <ListOfMoviesListView />}
      </div>
    </div>
  );
};
const mapStateToProps = ({ movies }) => ({ allMoviesState: movies });
export default withRouter(
  connect(mapStateToProps, {
    getListMovies,
    getListMoviesClear,
    addMovieToFavorites,
    filterMovies,
  })(ListOfMovies)
);
