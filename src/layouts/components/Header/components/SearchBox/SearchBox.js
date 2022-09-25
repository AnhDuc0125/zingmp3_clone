import { useState } from 'react';
import classNames from 'classnames/bind';
import { Search } from 'iconoir-react';
import Tippy from '@tippyjs/react/headless';

import styles from './SearchBox.module.scss';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import useDebounce from '~/hooks/useDebounce';
import PopperWrapper from '~/components/Popper';
import SearchItem from '../SearchItem';

const cx = classNames.bind(styles);

const SearchBox = () => {
  const [searchValue, setSearchValue] = useState('');
  const searchKeyword = useDebounce(searchValue);
  const [isFocus, setIsFocus] = useState(false);

  const [searchResult, loading] = useSimpleFetch('search?keyword=', searchKeyword);
  console.log('SearchBox ~ searchResult', searchResult);

  return (
    <Tippy
      visible={isFocus}
      offset={[0, 0]}
      interactive
      placement={'bottom'}
      render={(attrs) => (
        <PopperWrapper {...attrs} className={cx('search-tippy')}>
          <h3 className={cx('heading')}>Nghệ sĩ</h3>
          {searchResult?.artists?.map(
            (artist, index) =>
              index < 3 && <SearchItem key={artist.encodeId} type={'artist'} data={artist} />
          )}
          <h3 className={cx('heading', 'separate')}>Bài hát</h3>
          {searchResult?.songs?.map((song) => (
            <SearchItem key={song.encodeId} data={song} />
          ))}
        </PopperWrapper>
      )}
    >
      <div className={cx('wrapper')}>
        <span className={cx('icon')}>
          <Search />
        </span>
        <input
          type="text"
          className={cx('input')}
          value={searchValue}
          placeholder={'Tìm kiếm bài hát, nghệ sĩ, lời bài hát...'}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
      </div>
    </Tippy>
  );
};

export default SearchBox;
