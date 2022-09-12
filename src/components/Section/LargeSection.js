import classNames from 'classnames/bind';

import styles from './Section.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

const LargeSection = ({ title }) => {
  return (
    <div>
      <div className={cx('wrapper')}>
        <h3 className={cx('title')}>Mới phát hành</h3>
        <div className={cx('tabs')}>
          <span className={cx('tab-item', 'active')}>Bài hát</span>
          <span className={cx('tab-item')}>Album</span>
        </div>
        <div className={cx('container')}>
          <div className={cx('item')}>
            <div className={cx('item-image')}>
              <img
                src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg"
                alt=""
              />
            </div>
            <span className={cx('item-title')}>Top 100 bài hát nhạc trẻ hay nhất</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeSection;
