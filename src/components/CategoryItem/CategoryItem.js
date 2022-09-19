import classNames from 'classnames/bind';

import styles from './CategoryItem.module.scss';

const cx = classNames.bind(styles);

const CategoryItem = ({ data }) => {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://photo-zmp3.zmdcdn.me/cover/d/b/5/c/db5cf069b328c7858b2d9642cc6b4529.jpg"
        alt="Workout"
      />
      <div className={cx('body')}>
        <h3 className={cx('title')}>asdsd</h3>
        <div className={cx('container')}>
          <div className={cx('item')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/e/c/d/7ecd60f5131550a38267d9d0d35cf979.jpg"
              alt=""
            />
          </div>
          <div className={cx('item')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/e/c/d/7ecd60f5131550a38267d9d0d35cf979.jpg"
              alt=""
            />
          </div>
          <div className={cx('item')}>
            <img
              src="https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/7/e/c/d/7ecd60f5131550a38267d9d0d35cf979.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
