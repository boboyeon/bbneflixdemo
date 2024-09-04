import React from "react";
import "./MovieSlider.style.css";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  return (
    <div className="slide-title">
      <h3>{title}</h3>
      <Carousel
        responsive={responsive}
        centerMode={true}
        infinite={true}
        containerClass="carousel-container"
        itemClass="movie-slider p-1"
        // partialVisible={true}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlider;
