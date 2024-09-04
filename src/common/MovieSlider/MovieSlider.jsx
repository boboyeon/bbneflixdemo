import React from "react";
import "./MovieSlider.style.css";

const MovieSlider = () => {
  return <div className="slide-title">
    <h3>Popular Movies</h3>
      <Carousel
        responsive={responsive}
        centerMode={true}
        infinite={true}
        containerClass="carousel-container"
        itemClass="movie-slider p-1"
        // partialVisible={true}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
  </div>;
};

export default MovieSlider;
