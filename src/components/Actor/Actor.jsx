import PropTypes from 'prop-types';
import actorBg from 'utilities/images/actor.png';

import styles from './Actor.module.scss';

const Actor = ({ photo, name, character }) => {
  const photoUrl = photo ? `https://image.tmdb.org/t/p/w300${photo}` : actorBg;

  return (
    <div className={styles.List}>
      <div className={styles.PhotoWrapper}>
        <img src={photoUrl} className={styles.Photo} alt={name} />
      </div>
      <p className={styles.Name}>{name}</p>
      <p className={styles.Character}>
        <span>Character: </span>
        <b>{character}</b>
      </p>
    </div>
  );
};

Actor.dedaultProps = {
  photo: actorBg,
};

Actor.propTypes = {
  photo: PropTypes.string,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Actor;
