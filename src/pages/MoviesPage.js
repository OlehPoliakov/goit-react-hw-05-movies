import { useState, useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from 'components/SearchBar';
import MoviesList from 'components/MoviesList';
import LoadMoreButton from 'components/LoadMoreButton';
import Loader from 'components/Loader';

import api from 'services/api';
// Компонент страницы поиска фильмов
const MoviesPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState(query || '');
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [error, setError] = useState(null);

  // При монтировании делает запрос за фильмами. Если в searchQuery пусто то ничего не делает.
  useEffect(() => {
    if (searchQuery) {
      getMovies();
    }
    // eslint-disable-next-line
  }, [searchQuery]);

  // Фетч фильма по запросу из инпута
  const getMovies = async () => {
    setLoading(true);

    try {
      const results = await api.fetchMoviesBySearch(searchQuery, page);

      if (results.length === 0) {
        toast.info('Nothing found 🙄', {
          autoClose: 2000,
        });
        navigate('/movies');
        return;
      }

      setMovies(prev => [...prev, ...results]);
      setPage(prev => prev + 1);
      setLoading(true);
    } catch (error) {
      console.error('Smth wrong with search fetch', error);
      setError({ error }); // Почему не пишет?
    } finally {
      setLoading(false);
    }
  };

  // Принимает запрос с инпута и пишет его в стейт
  const onChangeQuery = query => {
    setMovies([]);
    setSearchQuery(query);
    setPage(1);
    setError(null);

    // После поиска пишет в search истории шаблонную строку
    navigate({
      ...location,
      search: `query=${query}`,
    });
  };

  return (
    <>
      <SearchBar onSearch={onChangeQuery} />

      <MoviesList movies={movies} />

      {movies.length > 0 && <LoadMoreButton onClick={getMovies} />}

      {isLoading && <Loader />}

      <ToastContainer position="top-right" theme="colored" />
    </>
  );
};

export default MoviesPage;
