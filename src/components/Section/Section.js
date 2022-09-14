import classNames from 'classnames/bind';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

const Section = ({ title, children, flex }) => {
  const classes = {
    flex,
  };
  return (
    <div className={cx('wrapper')}>
      {title && <h3 className={cx('title')}>{title}</h3>}
      <div className={cx('container', { ...classes })}>
        {children}
        {/* <div className={cx('item')}>
          <div className={cx('item-image')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/d/2/5/ed251cf560be4747e7737b535c357f07.jpg"
              alt=""
            />
          </div>
          <span className={cx('item-title')}>Top 100 bài hát nhạc trẻ hay nhất</span>
        </div> */}
      </div>
    </div>
  );
};

export default Section;
