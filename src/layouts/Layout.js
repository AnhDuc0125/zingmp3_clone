import classNames from 'classnames/bind';
import Sidebar from '~/components/Sidebar';
import PropTypes from 'prop-types';

import styles from './Layout.module.scss';
import Header from '~/components/Header';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('container')}>
        <div className={cx('main')}>
          <Header />
          {children}
        </div>
        <div className={cx('player-queue')}></div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
