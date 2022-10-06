import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from 'components/Loader';
// import { Layout } from 'components/Layout/Layout';

const Layout = lazy(() =>
  import('../Layout/Layout' /* webpackChunkName: "home-page" */)
);
const HomePage = lazy(() =>
  import('../../pages/HomePage' /* webpackChunkName: "home-page" */)
);
const MoviesPage = lazy(() =>
  import('../../pages/MoviesPage' /* webpackChunkName: "movies-page" */)
);
const MovieDetailsPage = lazy(() =>
  import(
    '../../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  )
);
const PageNotFound = lazy(() =>
  import('../../pages/PageNotFound' /* webpackChunkName: "404-page" */)
);
const Cast = lazy(() =>
  import('../Cast/Cast' /* webpackChunkName: "cast-view" */)
);
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "review-view" */)
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
