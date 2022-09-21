import classNames from 'classnames/bind';
import { Minus, Music1, PlayOutline } from 'iconoir-react';

import styles from './MusicItem.module.scss';
import Image from '~/components/Image';
import { getDuration } from '~/utils';

const cx = classNames.bind(styles);

const MusicItem = ({ data, rank, small, icon }) => {
  const classes = {
    small,
  };
  return (
    <div className={cx('wrapper', { ...classes })}>
      <div className={cx('music')}>
        {icon && (
          <div className={cx('icon')}>
            <Music1 />
          </div>
        )}
        {rank && (
          <div className={cx('rank')}>
            <div className={cx('rank-num')}>{rank}</div>
            <h4 className={cx('status')}>
              <Minus />
            </h4>
          </div>
        )}
        <div className={cx('thumb')}>
          <Image src={data?.thumbnailM} alt="" />
          <span className={cx('play-icon')}>
            <PlayOutline fill="white" color="white" />
          </span>
        </div>
        <div className={cx('info')}>
          <span className={cx('name')}>{data.title}</span>
          <p className={cx('singer')}>{data.artistsNames}</p>
        </div>
      </div>
      <div className={cx('album')}>{data.album?.title}</div>
      <div className={cx('duration')}>{getDuration(data.duration)}</div>
    </div>
  );
};

export default MusicItem;
