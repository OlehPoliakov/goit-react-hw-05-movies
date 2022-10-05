import { NavLink } from 'react-router-dom';
import { FaFilm } from 'react-icons/fa';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.Nav}>
    <div className={styles.LogoWrapper}>
      <FaFilm className={styles.CustomIcon} />
      <h1 className={styles.Title}>Kinopoisk</h1>
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
  </nav>
);

export default Navigation;
