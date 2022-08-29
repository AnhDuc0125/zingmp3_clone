import classNames from 'classnames/bind';
import { Search } from 'iconoir-react';

import styles from './SearchBox.module.scss';

const cx = classNames.bind(styles);

const SearchBox = () => {
  return (
    <div className={cx('wrapper')}>
      <span className={cx('icon')}>
        <Search />
      </span>
      <input type="text" className={cx('input')} placeholder={'Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'} />
    </div>
  );
};

export default SearchBox;
