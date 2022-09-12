import classNames from 'classnames/bind';

import styles from './ArtistItem.module.scss';

const cx = classNames.bind(styles);

const ArtistItem = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={data.thumbnail} alt={data.artistsNames} className={cx('thumbnail')} />
        <div className={cx('body')}>
          <h3 className={cx('name')}>{data.artistsNames}</h3>
          <div className={cx('songs')}>
            {data.song.items
              .filter((item, index) => index < 3)
              .map((item) => (
                <div key={item.encodeId} className={cx('song-item')}>
                  <img src={item.thumbnail} alt={item.title} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistItem;
