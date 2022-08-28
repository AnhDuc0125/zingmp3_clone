import classNames from 'classnames/bind';

import styles from './SearchBox.module.scss';

const cx = classNames.bind(styles);

const SearchBox = () => {
  return <div className={cx('wrapper')}></div>;
};

export default SearchBox;
