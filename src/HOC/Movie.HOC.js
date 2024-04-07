import React from "react";
import MovieLayout from "../layouts/Movie.layout";
import Home from "../pages/Home.page";
const MovieHOC = ({ children }) => {
  return (
    <MovieLayout>
      <Home />
    </MovieLayout>
  );
}

export default MovieHOC;