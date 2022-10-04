import styles from './Footer.module.scss';

const AppFooter = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>&copy; {new Date().getFullYear()} Kinopoisk</p>
    </footer>
  );
};

export default AppFooter;
