import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container/Container';
import Header from 'components/Header';
import Footer from 'components/Footer';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <Header title="Kinopoisk" />

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>

      <Footer />
    </>
  );
};

export { Layout };
