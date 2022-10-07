import { useState, useEffect } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import MovieNavigation from 'components/MovieNavigation';
import Loader from 'components/Loader';
import GoBackButton from 'components/GoBackButton';
import api from 'services/api';

function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const location = useLocation();
  // Функция для кнопки "Назад"
  const onGoBack = location.state?.from ?? '/';

  const { movieId } = useParams(); // Получаем id фильма из useParams
  // Запрос при маунте
  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    setLoading(true);

    try {
      const result = await api.fetchMovieById(movieId);
      setMovieInfo(result);
    } catch (error) {
      console.error('Smth wrong with fetch movie on movie page', error);
      setError({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <GoBackButton to={onGoBack} />

      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

      {movieInfo && <MovieNavigation />}

      {isLoading && <Loader />}
      <Outlet />
    </>
  );
}

export default MovieDetailsPage;
