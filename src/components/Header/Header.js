import classNames from 'classnames/bind';
import { ArrowLeft, ArrowRight } from 'iconoir-react';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('navigate')}>
        <span className={cx('navigate-left')}>
          <ArrowLeft />
        </span>
        <span className={cx('navigate-right')}>
          <ArrowRight />
        </span>
        <div></div>
      </div>
      <div className={cx('actions')}></div>
    </div>
  );
};

export default Header;
