import classNames from 'classnames/bind';
import Sidebar from '~/components/Sidebar';

import styles from './Layout.module.scss';

const cx = classNames.bind(styles);

const Layout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Sidebar />
      <div className={cx('container')}>
        <div className={cx('main')}>
          {/* Seach box */}
          {children}
        </div>
        <div className={cx('player-queue')}></div>
      </div>
    </div>
  );
};

export default Layout;
