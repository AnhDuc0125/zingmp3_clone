import classNames from 'classnames/bind';

import styles from './Gallery.module.scss';

const cx = classNames.bind(styles);

const Gallery = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('gallery-item')}>
        <img
          src="https://photo-zmp3.zmdcdn.me/banner/b/9/9/e/b99e4e8a24fdb77d08aea74283cc3490.jpg"
          alt=""
          className={cx('gallery-img')}
        />
      </div>
      <div className={cx('gallery-item')}>
        <img
          src="https://photo-zmp3.zmdcdn.me/banner/b/9/9/e/b99e4e8a24fdb77d08aea74283cc3490.jpg"
          alt=""
          className={cx('gallery-img')}
        />
      </div>
      <div className={cx('gallery-item')}>
        <img
          src="https://photo-zmp3.zmdcdn.me/banner/b/9/9/e/b99e4e8a24fdb77d08aea74283cc3490.jpg"
          alt=""
          className={cx('gallery-img')}
        />
      </div>
    </div>
  );
};

export default Gallery;
