import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';
import { PlayOutline, Heart, MoreHoriz } from 'iconoir-react';

import styles from './MusicItem.module.scss';

const cx = classNames.bind(styles);

const MusicItem = ({ name, singer, image, large, heightFull }) => {
  return (
    <div className={cx('wrapper', { large, 'h-full': heightFull })}>
      <div className={cx('thumb')}>
        <img src={image} alt="" className={cx('image')} />
        <span className={cx('play-icon')}>
          <PlayOutline fill="white" />
        </span>
      </div>
      <div className={cx('info')}>
        <h4 className={cx('name')}>{name}</h4>
        <p className={cx('singer')}>{singer}</p>
      </div>
      <div className={cx('actions')}>
        <span className={cx('remove', 'action-icon')}>
          <Heart fill="white" />
        </span>
        <span className={cx('other', 'action-icon')}>
          <MoreHoriz fill="white" />
        </span>
      </div>
    </div>
  );
};

// MusicItem.propTypes = {
//   name: PropTypes.string.isRequired,
//   singer: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   large: PropTypes.bool,
// };

export default MusicItem;
