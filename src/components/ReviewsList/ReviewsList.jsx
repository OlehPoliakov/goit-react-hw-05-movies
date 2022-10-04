import propTypes from 'prop-types';
import styles from './ReviewsList.module.scss';

function ReviewsList({ reviews }) {
  return (
    <ul className={styles.list}>
      {reviews.map(({ id, author, text }) => {
        return (
          <li className={styles.item} key={id}>
            <h2 className={styles.title}>{author}</h2>
            <p className={styles.text}>{text}</p>
          </li>
        );
      })}
    </ul>
  );
}

ReviewsList.prototype = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string,
      author: propTypes.string,
      text: propTypes.string,
    })
  ).isRequired,
};

export default ReviewsList;
