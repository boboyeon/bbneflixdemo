import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import { responsive } from '../../../../constants/responsive';

const UpcomingMovie = () => {
    const { data, isLoading, isError, error } = usePopularMoviesQuery();
  
    if (isLoading) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }
  
    if (isError) {
      return (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <Alert variant="danger">
            <p>{error.message}</p>
          </Alert>
        </div>
      );
    }
  
    return (
      <div>
        <MovieSlider
          title="Upcoming Movies"
          movies={data.results}
          responsive={responsive}
        />
      </div>
    );
  }

export default UpcomingMovie
