import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './GoBackButton.module.scss';

const GoBackButton = ({ to }) => (
  <Link to={to}>
    <button className={styles.ButtonGoBack} type="button">
      <FaChevronLeft />
      <span className={styles.Label}>Go back</span>
    </button>
  </Link>
);

GoBackButton.propTypes = {
  to: PropTypes.func.isRequired,
};

export default GoBackButton;
