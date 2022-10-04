import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from 'components/SearchBar';
import MoviesList from 'components/MoviesList';
import { getSearchMovies } from 'services/api';
import LoadMoreButton from 'components/LoadMoreButton';

function MoviesPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('query') ?? '';

  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (query !== '') {
      getSearchMovies(query).then(({ results }) => {
        const moviesArr = [];

        results.map(
          ({ id, original_title, poster_path, vote_average, vote_count }) => {
            const movie = {
              id,
              title: original_title,
              poster: poster_path,
              voteAverage: vote_average,
              voteCount: vote_count,
            };

            return moviesArr.push(movie);
          }
        );

        setMovies(moviesArr);
      });
    }
  }, [query]);

  return (
    <>
      <SearchBar />
      {movies && <MoviesList movies={movies}></MoviesList>}
    </>
  );
}

export default MoviesPage;
