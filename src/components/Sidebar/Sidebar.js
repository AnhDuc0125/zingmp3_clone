import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.scss';
import Logo from '~/assets/Logo';
import { sidebarItem } from '.';

const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('logo')}>
        <Logo />
      </div>
      <div className={cx('main')}>
        {sidebarItem.map((item, index) => (
          <Link key={index} to={item.to} className={cx('sidebar-item')}>
            <span className={cx('sidebar-item-icon')}>{item.icon}</span>
            <p className={cx('sidebar-item-title')}>{item.title}</p>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
