import { useLocation, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
import posterBg from 'utilities/images/poster.jpg';
import styles from './MovieDetails.module.scss';

import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

function MovieDetails({ movieInfo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const subLocation = location.state.from;

  const {
    title,
    genres,
    description,
    poster,
    releaseDate,
    voteAverage,
    voteCount,
  } = movieInfo;

  const onGoBack = () => navigate(location?.state?.from ?? '/');

  return (
    <div className={styles.MuvieDetailsWrapper}>
      <button className={styles.ButtonGoBack} type="button" onClick={onGoBack}>
        <FaChevronLeft />
        <span className={styles.Label}>Go back</span>
      </button>

      <div className={styles.MainWrapper}>
        <img
          className={styles.Poster}
          src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : posterBg}
          alt={title}
        />
        <div className={styles.InfoWrapper}>
          <div className={styles.TitleWrapper}>
            <h2 className={styles.Title}>{title}</h2>
            <p className={styles.ReleaseDate}>{releaseDate}</p>
          </div>
          <ul className={styles.GenresList}>
            {genres &&
              genres.map(({ name, id }) => (
                <li className={styles.GenresItem} key={id}>
                  {name}
                </li>
              ))}
          </ul>
          <p className={styles.Description}>{description}</p>
          <div className={styles.VoteWrapper}>
            <p className={styles.VoteAverage}>
              Vote average:
              <span className={styles.Value}>{voteAverage.toFixed(1)}</span>
            </p>
            <p className={styles.VoteCount}>
              Vote count:
              <span className={styles.Value}>{voteCount}</span>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.AdditionalWrapper}>
        <p className={styles.AdditionalTitle}>Additional Information</p>
        <ul className={styles.NavigationsList}>
          <li className={styles.NavigationsItem}>
            <NavLink
              className={styles.CustomLink}
              to="cast"
              state={{ from: subLocation }}
            >
              <FaChevronRight /> Cast
            </NavLink>
          </li>
          <li className={styles.NavigationsItem}>
            <NavLink
              className={styles.CustomLink}
              to="reviews"
              state={{ from: subLocation }}
            >
              <FaChevronRight /> Reviews
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

MovieDetails.prototype = {
  movieInfo: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    description: propTypes.string,
    poster: propTypes.string,
    releaseDate: propTypes.string,
    voteAverage: propTypes.number,
    voteCount: propTypes.number,
  }),
};

export default MovieDetails;
