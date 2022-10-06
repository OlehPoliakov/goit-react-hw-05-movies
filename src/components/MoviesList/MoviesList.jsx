import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MoviePreview from 'components/MoviePreview';
import styles from './MoviesList.module.scss';

// Комопнент списка фильмов, принимает фильмы и location
function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(
        ({ id, original_title, poster_path, vote_average, vote_count }) => {
          return (
            <li key={id} className={styles.item}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={styles.link}
              >
                <MoviePreview
                  title={original_title}
                  poster={poster_path}
                  voteAverage={vote_average}
                  voteCount={vote_count}
                />
              </Link>
            </li>
          );
        }
      )}
    </ul>
  );
}

MoviesList.prototype = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster: PropTypes.string,
    })
  ).isRequired,
};

export default MoviesList;
