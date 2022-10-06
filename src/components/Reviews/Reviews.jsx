import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import Message from 'components/Message';

import api from 'services/api';
import styles from './Reviews.module.scss';

// Компонент списка обзоров
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams(); // Получаем id фильма из useParams

  // Срабатывает при маунте
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // Запрос за обзорами
  const fetchData = async () => {
    setLoading(true);

    try {
      const { results } = await api.fetchReviews(movieId);
      setReviews(results);
    } catch (error) {
      console.error('Smth wrong with fetch reviews on movie page', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {reviews.length > 0 ? (
        <ul className={styles.list}>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className={styles.item}>
                <div>
                  <b className={styles.Author}>{author}</b>
                  <p className={styles.Content}>{content}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}

      {isLoading && <Loader />}

      {error && (
        <Message>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
        </Message>
      )}
    </div>
  );
};

Reviews.propTypes = {
  movieId: PropTypes.object,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default Reviews;
