import propTypes from 'prop-types';
import actorBg from 'utilities/images/actor.png';
import styles from './CastList.module.scss';

function CastList({ actors }) {
  return (
    <ul className={styles.List}>
      {actors.map(({ id, name, photo }) => {
        return (
          <li className={styles.Item} key={id}>
            <div className={styles.PhotoWrapper}>
              <img
                className={styles.Photo}
                src={
                  photo ? `https://image.tmdb.org/t/p/w500/${photo}` : actorBg
                }
                alt={name}
              />
            </div>
            <p className={styles.Name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
}

CastList.prototype = {
  actors: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number,
      name: propTypes.string,
      photo: propTypes.string,
    })
  ).isRequired,
};

export default CastList;
