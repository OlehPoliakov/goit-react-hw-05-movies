import PropTypes from 'prop-types';
import { FaChevronLeft } from 'react-icons/fa';
import styles from './GoBackButton.module.scss';

const GoBackButton = ({ onGoBack }) => (
  <button className={styles.ButtonGoBack} type="button" onClick={onGoBack}>
    <FaChevronLeft />
    <span className={styles.Label}>Go back</span>
  </button>
);

GoBackButton.propTypes = {
  onGoBack: PropTypes.func.isRequired,
};

export default GoBackButton;
