import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useNavigate,
  useLocation,
  Routes,
  Route,
} from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import MovieNavigation from 'components/MovieNavigation';
import Loader from 'components/Loader';
import GoBackButton from 'components/GoBackButton';
import api from 'services/api';

const Cast = lazy(() =>
  import('components/Cast' /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import('components/Reviews' /* webpackChunkName: "review-view" */)
);

function MovieDetailsPage() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

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

  // Функция для кнопки "Назад"
  const onGoBack = () => navigate(location?.state?.from ?? '/');

  return (
    <>
      <GoBackButton onGoBack={onGoBack} />

      {movieInfo && <MovieDetails movieInfo={movieInfo} />}

      {movieInfo && <MovieNavigation />}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>

      {isLoading && <Loader />}
    </>
  );
}

export default MovieDetailsPage;
