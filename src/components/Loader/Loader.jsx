import styles from './Loader.module.scss';

function Loader() {
  return (
    <div className={styles.LoaderWrapper}>
      <p className={styles.Text}>Loading...</p>
    </div>
  );
}

export default Loader;
