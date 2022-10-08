import propTypes from 'prop-types';
import posterBg from 'utilities/images/poster.jpg';
import styles from './MovieDetails.module.scss';

// Компонент полной карточки фильма
function MovieDetails({ movieInfo }) {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
    vote_count,
  } = movieInfo;

  return (
    <div className={styles.MuvieDetailsWrapper}>
      <div className={styles.MainWrapper}>
        <img
          className={styles.Poster}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : posterBg
          }
          alt={original_title}
        />
        <div className={styles.InfoWrapper}>
          <div className={styles.TitleWrapper}>
            <h2 className={styles.Title}>{original_title}</h2>
            <p className={styles.ReleaseDate}>{release_date}</p>
          </div>
          <ul className={styles.GenresList}>
            {genres &&
              genres.map(({ name, id }) => (
                <li className={styles.GenresItem} key={id}>
                  {name}
                </li>
              ))}
          </ul>
          <p className={styles.Description}>{overview}</p>
          <div className={styles.VoteWrapper}>
            <p className={styles.VoteAverage}>
              Vote average:
              <span className={styles.Value}>{vote_average}</span>
            </p>
            <p className={styles.VoteCount}>
              Vote count:
              <span className={styles.Value}>{vote_count}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movieInfo: propTypes.shape({
    original_title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    overview: propTypes.string,
    poster_path: propTypes.string,
    release_date: propTypes.string,
    vote_average: propTypes.number,
    vote_count: propTypes.number,
  }),
};

export default MovieDetails;
