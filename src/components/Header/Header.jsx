import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import styles from './Header.module.scss';

function Header({ title }) {
  return (
    <header className={styles.HeaderWrapper}>
      <div className={styles.LogoWrapper}>
        <FaFilm className={styles.CustomIcon} />
        <h1 className={styles.Title}>{title}</h1>
      </div>
      <ul className={styles.NavigationList}>
        <li className={styles.Item}>
          <NavLink className={styles.CustomLink} end to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.Item}>
          <NavLink className={styles.CustomLink} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

Header.prototype = {
  title: propTypes.string.isRequired,
};

export default Header;
