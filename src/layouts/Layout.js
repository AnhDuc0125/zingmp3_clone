import classNames from 'classnames/bind';
import Sidebar from '~/layouts/components/Sidebar';
import PropTypes from 'prop-types';

import styles from './Layout.module.scss';
import Header from '~/layouts/components/Header';
import Player from './components/Player';
import PlayerQueue from './components/PlayerQueue';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <Sidebar />
        <div className={cx('container')}>
          <main className={cx('main')}>
            <Header />
            {children}
          </main>
        </div>
        <PlayerQueue />
      </div>
      <div className={cx('footer')}>
        <Player />
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
