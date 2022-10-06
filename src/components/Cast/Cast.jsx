import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Actor from 'components/Actor';
import Loader from 'components/Loader';
import Message from 'components/Message';

import api from 'services/api';
import styles from './Cast.module.scss';

// Компонент списка актёров
const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { movieId } = useParams(); // Получаем id фильма из useParams

  // Срабатывает при маунте
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  // Запрос за актёрами
  const fetchData = async () => {
    setLoading(true);

    try {
      const { cast } = await api.fetchCast(movieId);
      setActors(cast);
    } catch (error) {
      console.error('Smth wrong with fetch cast on movie page', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {actors.length > 0 ? (
        <ul className={styles.list}>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <li key={id} className={styles.item}>
                <Actor photo={profile_path} name={name} character={character} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There is no information about actors for this movie.</p>
      )}

      {isLoading && <Loader />}

      {error && (
        <Message>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
        </Message>
      )}
    </>
  );
};

Cast.propTypes = {
  movieId: PropTypes.object,
};

export default Cast;
