import { RotatingLines } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.LoaderWrapper}>
      <RotatingLines color="#d0d0d0" height={100} width={100} />
    </div>
  );
};

export default Loader;
