const key = '57c4f7b58ce81ca7bd804351e71dcbc7';
const url = `https://api.themoviedb.org/3`;

// Фетч актёров для фильма
export const getMovieCredits = async movieId => {
  const filter = `/movie/${movieId}/credits?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};
// Фетч фильма по id
export const getMovieDetails = async movieId => {
  const filter = `/movie/${movieId}?api_key=${key}&language=en-US`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};
// Фетч отзывов на фильм
export const getMovieReviews = async movieId => {
  const filter = `/movie/${movieId}/reviews?api_key=${key}&language=en-US&page=1`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};
// Фетч по поиску
export const getSearchMovies = async (query, page = 1) => {
  const filter = `/search/movie?api_key=${key}&query=${query}&language=en-US&page=${page}&include_adult=false`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};
// Фетч трендов
export const getTrending = async () => {
  const filter = `/trending/all/day?api_key=${key}`;

  const response = await fetch(`${url}${filter}`);
  const data = await response.json();

  return data;
};
