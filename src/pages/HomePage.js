import { useState, useEffect } from 'react';
import MoviesList from 'components/MoviesList';
import Message from 'components/Message';
import Loader from 'components/Loader';

import api from 'services/api';

const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState('');

  // Срабатывает при маунте
  useEffect(() => {
    fetchData();
  }, []);

  // Запрос за трендами при маунте
  const fetchData = async () => {
    setLoading(true);

    try {
      const movies = await api.fetchTrends();

      setTrends(movies);
    } catch (error) {
      console.error('Smth wrong with homepage trends fetch', error);
      setError(error.message); // Почему не пишет?
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <h1
        style={{
          textAlign: 'center',
          color: 'wheat',
          fontSize: '36px',
          textShadow: '1px 0 1px black',
        }}
      >
        Trends of the day
      </h1>
      {trends ? (
        <MoviesList movies={trends} />
      ) : (
        <Message>
          <h2>
            The service is temporarily unavailable. Please try again later.
          </h2>
        </Message>
      )}

      {isLoading && <Loader />}
    </main>
  );
};

export default HomePage;
