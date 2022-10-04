import { useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.scss';

function SearchBar() {
  const location = useLocation();
  const navigate = useNavigate();

  function onSubmitForm(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    navigate({
      ...location,
      search: `query=${value}`,
    });
  }

  return (
    <form className={styles.FormSearch} onSubmit={onSubmitForm}>
      <input className={styles.InputSearch} type="text" name="query" />
      <button className={styles.ButtonSubmit} type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
