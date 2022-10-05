import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const apiKey = '57c4f7b58ce81ca7bd804351e71dcbc7';

// Фетч трендов
export const fetchTrends = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day?api_key=${apiKey}`);
    const trends = data.results;

    return trends;
  } catch (error) {
    console.error('Smth wrong with fetch trends in api', error);
  }
};

// Фетч по поиску
export const fetchMoviesBySearch = async (searchQuery, currentPage) => {
  try {
    const { data } = await axios.get(
      `search/movie?api_key=${apiKey}&query=${searchQuery}&page=${currentPage}&language=en-US`
    );

    const results = data.results;

    return results;
  } catch (error) {
    console.error('Smth wrong with fetch movie search in api', error);
  }
};

// Фетч фильма по id
const fetchMovieById = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}?api_key=${apiKey}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch movie id in api', error);
  }
};

// Фетч актёров для фильма
export const fetchCast = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/credits?api_key=${apiKey}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch cast in api', error);
  }
};

// Фетч отзывов на фильм
export const fetchReviews = async id => {
  try {
    const { data } = await axios.get(
      `/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
    );

    return data;
  } catch (error) {
    console.error('Smth wrong with fetch reviews in api', error);
  }
};

// eslint-disable-next-line
export default {
  fetchTrends,
  fetchMoviesBySearch,
  fetchMovieById,
  fetchCast,
  fetchReviews,
};
