import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';

import styles from './SearchBar.module.scss';
// import 'react-toastify/dist/ReactToastify.min.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Наблюдает за инпутом и пишет значние в стейт
  const handleSearchInput = e => {
    const { value } = e.target;

    setQuery(value);
  };

  // Наблюдает за отправкой и отдает значение во внешний компонент
  const handleSubmit = e => {
    e.preventDefault();

    if (!query.trim()) {
      alert('Please write your request');
      return;
    }

    onSearch(query);

    resetForm();
  };

  // Сбрасывает поле после отправки
  const resetForm = () => setQuery('');

  return (
    <>
      <form className={styles.FormSearch} onSubmit={handleSubmit}>
        <input
          className={styles.InputSearch}
          type="text"
          name="query"
          value={query}
          onChange={handleSearchInput}
          autoComplete="off"
          placeholder="Search movies"
          required
        />
        <button type="submit" className={styles.ButtonSubmit}>
          <FaSearch />
        </button>
      </form>

      {/* <ToastContainer /> */}
    </>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
