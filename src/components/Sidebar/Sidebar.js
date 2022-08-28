import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

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
        <div className={cx('nav-fixed')}>
          {sidebarItem
            .filter((item) => !item.scrollable)
            .map((item, index) => (
              <NavLink key={index} to={item.to} className={({ isActive }) => cx('sidebar-item', { active: isActive })}>
                <span className={cx('sidebar-item-icon')}>{item.icon}</span>
                <p className={cx('sidebar-item-title')}>{item.title}</p>
              </NavLink>
            ))}
        </div>
        <div className={cx('nav-scrollable')}>
          {sidebarItem
            .filter((item) => item.scrollable)
            .map((item, index) => (
              <NavLink key={index} to={item.to} className={({ isActive }) => cx('sidebar-item', { active: isActive })}>
                <span className={cx('sidebar-item-icon')}>{item.icon}</span>
                <p className={cx('sidebar-item-title')}>{item.title}</p>
              </NavLink>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
