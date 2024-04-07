import React from "react";
import MovieLayout from "../layouts/Movie.layout";
import Movie from "../pages/Movie.page";
const MovieHOC = ({ children }) => {
  return (
    <MovieLayout>
      <Movie />
    </MovieLayout>
  );
}

export default MovieHOC;