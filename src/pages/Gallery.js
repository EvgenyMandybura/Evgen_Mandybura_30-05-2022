import React from "react";
import ListOfMovies from "../components/common/ListOfMovies";
import FavoriteList from "../components/common/FavoriteList";
import styles from "./movies.scss";

const Gallery = () => {
  return (
    <div className="moviesPage">
      <ListOfMovies />
      <FavoriteList />
    </div>
  );
};

export default Gallery;
