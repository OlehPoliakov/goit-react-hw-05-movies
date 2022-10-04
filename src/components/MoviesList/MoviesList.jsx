import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import styles from './MoviesList.module.scss';
import posterBg from 'utilities/images/poster.jpg';

// Комопнент списка фильмов, принимает фильмы и location
function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster, voteAverage, voteCount }) => {
        return (
          <li key={id} className={styles.item}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={styles.link}
            >
              <img
                className={styles.poster}
                src={
                  poster
                    ? `https://image.tmdb.org/t/p/w500/${poster}`
                    : posterBg
                }
                alt={title}
              />
              <p className={styles.voteAverage}>{voteAverage.toFixed(1)}</p>
              <p className={styles.voteWrapper}>
                <FaHeart className={styles.faHeart} />
                <span className={styles.voteCount}>{voteCount}</span>
              </p>
              <p className={styles.title}>
                {title ? title : 'Movie without a title'}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

MoviesList.prototype = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      title: propTypes.string,
      poster: propTypes.string,
      voteAverage: propTypes.number,
      voteCount: propTypes.number,
    })
  ).isRequired,
};

export default MoviesList;
