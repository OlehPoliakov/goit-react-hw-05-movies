import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList';
import { getTrending } from 'services/api';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrending().then(({ results }) => {
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
  }, []);

  return movies && <MoviesList movies={movies} />;
}

export default HomePage;
