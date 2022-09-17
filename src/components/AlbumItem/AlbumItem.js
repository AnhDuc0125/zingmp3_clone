import classNames from 'classnames/bind';
import { Heart, MoreHoriz, PlayOutline } from 'iconoir-react';
import ToolTip from '@tippyjs/react/';

import styles from './AlbumItem.module.scss';

const cx = classNames.bind(styles);

const AlbumItem = ({ data, className }) => {
  return (
    <div className={cx('wrapper', { [className]: className })}>
      <div className={cx('image')}>
        <div className={cx('overlay')}>
          <ToolTip content="Thêm vào thư viện">
            <span className={cx('action-btn', 'add-favorite')}>
              <Heart />
            </span>
          </ToolTip>
          <span className={cx('action-btn', 'play')}>
            <PlayOutline />
          </span>
          <ToolTip content="Khác">
            <span className={cx('action-btn', 'more')}>
              <MoreHoriz />
            </span>
          </ToolTip>
        </div>
        <img src={data.thumbnailM} alt="" />
      </div>
      <p className={cx('title')}>{data.title}</p>
      <p className={cx('desc')}>{data.sortDescription || data.artistsNames}</p>
    </div>
  );
};

export default AlbumItem;
