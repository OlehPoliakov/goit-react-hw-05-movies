import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronRight } from 'react-icons/fa';
import styles from './MovieNavigation.module.scss';

// Меню актёров и обзоров
const MovieNavigation = () => {
  const location = useLocation();

  return (
    <div className={styles.AdditionalWrapper}>
      <p className={styles.AdditionalTitle}>Additional Information</p>
      <ul className={styles.NavigationsList}>
        <li className={styles.NavigationsItem}>
          <NavLink
            className={styles.CustomLink}
            to="cast"
            state={{ from: location.state?.from }}
          >
            <FaChevronRight /> Cast
          </NavLink>
        </li>
        <li className={styles.NavigationsItem}>
          <NavLink
            className={styles.CustomLink}
            to="reviews"
            state={{ from: location.state?.from }}
          >
            <FaChevronRight /> Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

MovieNavigation.propTypes = {
  subLocation: PropTypes.object,
};

export default MovieNavigation;
