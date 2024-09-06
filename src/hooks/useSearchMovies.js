import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchSearchMovie = ({ keyword, page, genreId }) => {
  return keyword
    ? api.get(`search/movie`, {
        params: {
          query: keyword,
          page: page,
          with_genres: genreId,
        },
      })
    : api.get(`discover/movie`, {
        params: {
          page: page,
          with_genres: genreId,
        },
      });
};

export const useSearchMovieQuery = ({ keyword, page, genreId }) => {
  return useQuery({
    queryKey: ["movie-search", { keyword, page, genreId }],
    queryFn: () => fetchSearchMovie({ keyword, page, genreId }),
    select: (result) => result.data,
    staleTime: 300000,
    keepPreviousData: true,
  });
};
