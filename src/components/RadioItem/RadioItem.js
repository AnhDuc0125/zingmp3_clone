import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './RadioItem.module.scss';

const cx = classNames.bind(styles);

const RadioItem = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('thumb')}>
        <div className={cx('thumb-img')}>
          <img src={data?.program?.thumbnail} alt="" />
          <div className={cx('overlay')}>
            <span>
              <PlayOutline fill="white" />
            </span>
          </div>
        </div>
        <div className={cx('avatar')}>
          <img src={data?.host?.thumbnail} alt={data?.host?.name} />
        </div>
      </div>
      <h5 className={cx('title')}>{data?.host?.name}</h5>
      <span className={cx('listening')}>{data?.activeUsers} đang nghe</span>
    </div>
  );
};

export default RadioItem;
