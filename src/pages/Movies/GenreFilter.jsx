import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import "./GenreFilter.style.css";

const GenreFilter = ({ onFilterChange }) => {
  const { data: genres } = useMovieGenreQuery();
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleGenreSelect = (genreId, genreName) => {
    setSelectedGenre(genreName);
    onFilterChange(genreId);
  };

  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={selectedGenre ? `${selectedGenre}` : "장르를 선택하세요"}
      variant="primary"
      className="genre-dropdown"
    >
      {genres?.map((genre) => (
        <Dropdown.Item
          key={genre.id}
          onClick={() => handleGenreSelect(genre.id, genre.name)}
        >
          {genre.name}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default GenreFilter;
