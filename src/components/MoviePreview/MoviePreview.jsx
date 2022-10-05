import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import styles from './MoviePreview.module.scss';
import posterBg from 'utilities/images/poster.jpg';

// Компонент превью фильма в общем списке фильмов
const MoviePreview = ({ title, poster, voteCount, voteAverage }) => {
  const posterUrl = poster
    ? `https://image.tmdb.org/t/p/w500${poster}`
    : posterBg;

  return (
    <div className={styles.card}>
      <img
        className={styles.poster}
        src={posterUrl}
        alt={title}
        title={title}
      />
      <p className={styles.voteAverage}>{voteAverage}</p>
      <p className={styles.voteWrapper}>
        <FaHeart className={styles.faHeart} />
        <span className={styles.voteCount}>{voteCount}</span>
      </p>
      <p className={styles.title}>{title ? title : 'Movie without a title'}</p>
    </div>
  );
};

MoviePreview.defaultProps = {
  poster: '',
  vote: null,
};

MoviePreview.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  voteCount: PropTypes.number,
  voteAverage: PropTypes.number,
};

export default MoviePreview;
