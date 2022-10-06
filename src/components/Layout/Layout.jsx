import { Outlet } from 'react-router-dom';
import Container from 'components/Container';
import AppBar from 'components/AppBar';
import AppFooter from 'components/AppFooter';

const Layout = () => {
  return (
    <>
      <AppBar />

      <Container>
        <Outlet />
      </Container>

      <AppFooter />
    </>
  );
};

export default Layout;
