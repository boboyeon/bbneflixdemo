import React, { useState } from "react";
import { useSearchMovieQuery } from "../../hooks/useSearchMovies";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Alert, Spinner, Col } from "react-bootstrap";
import MovieCard from "../../common/MovieCard/MovieCard";
import ReactPaginate from "react-paginate";
import GenreFilter from "../../pages/Movies/GenreFilter";
import "./MoviePage.style.css";

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const keyword = query.get("q");

 
  const { data, isLoading, isError, error } = useSearchMovieQuery({
    keyword,
    page,
    genreId: selectedGenre,
  });

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleFilterChange = (genreId) => {
    setSelectedGenre(genreId); 
    setPage(1);
  };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Alert variant="danger">
          <p>{error.message}</p>
        </Alert>
      </div>
    );
  }

  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          <GenreFilter onFilterChange={handleFilterChange} />
        </Col>
        <Col lg={8} xs={12}>
          <Row className="justify-content-center">
            {data?.results.map((movie, index) => (
              <Col key={index} lg={4} md={4} sm={6} xs={12} className="mb-4">
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
          <ReactPaginate
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={data?.total_pages} // 전체 페이지 수
            previousLabel="<"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="previous-link"
            nextClassName="page-item"
            nextLinkClassName="next-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
            forcePage={page - 1} // 0부터 시작하는 페이지
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MoviePage;
