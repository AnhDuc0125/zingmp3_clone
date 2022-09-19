import classNames from 'classnames/bind';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

const Section = ({ title, children, flex, wrap, grid }) => {
  const classes = {
    flex,
    wrap,
    grid,
  };
  return (
    <div className={cx('wrapper')}>
      {title && <h3 className={cx('title')}>{title}</h3>}
      <div className={cx('container', { ...classes })}>{children}</div>
    </div>
  );
};

export default Section;
