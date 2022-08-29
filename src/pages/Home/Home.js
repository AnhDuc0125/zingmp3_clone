import classNames from 'classnames/bind';
import Gallery from './components/Gallery/Gallery';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

const Home = () => {
  return (
    <main className={cx('wrapper')}>
      <Gallery />
    </main>
  );
};

export default Home;
