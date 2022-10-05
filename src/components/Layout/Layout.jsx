import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import AppFooter from 'components/AppFooter';
import Loader from 'components/Loader';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>

      <AppFooter />
    </>
  );
};

export { Layout };
