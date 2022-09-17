import classNames from 'classnames/bind';
import { Minus, PlayOutline } from 'iconoir-react';

import styles from './ChartItem.module.scss';

const cx = classNames.bind(styles);

const getDuration = (baseDuration) => {
  const minute = Math.floor(baseDuration / 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const second = (baseDuration - Math.floor(baseDuration / 60) * 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  const finalDuration = `${minute}: ${second}`;
  return finalDuration;
};

const ChartItem = ({ data, rank }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('music')}>
        <div className={cx('rank')}>{rank}</div>
        <span className={cx('status')}>
          <Minus />
        </span>
        <div className={cx('thumb')}>
          <img src={data.thumbnailM} alt="" />
          <span className={cx('play-icon')}>
            <PlayOutline fill="white" color="white" />
          </span>
        </div>
        <div className={cx('info')}>
          <h4 className={cx('name')}>{data.title}</h4>
          <p className={cx('singer')}>{data.artistsNames}</p>
        </div>
      </div>
      <div className={cx('album')}>{data.album.title}</div>
      <div className={cx('duration')}>{getDuration(data.duration)}</div>
    </div>
  );
};

export default ChartItem;