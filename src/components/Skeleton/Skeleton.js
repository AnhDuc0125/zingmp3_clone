import classNames from 'classnames/bind';
import { Minus } from 'iconoir-react';

import styles from './Skeleton.module.scss';
import SkeletonEffect from './SkeletonEffect';

const cx = classNames.bind(styles);

const Skeletion = ({ type }) => {
  const COUNT_ITEM = 5;

  const FeedSkeleton = () => (
    <div className={cx('wrapper')}>
      <div className={cx('gallery')}>
        <div className={cx('gallery-item')}>
          <SkeletonEffect />
        </div>
        <div className={cx('gallery-item')}>
          <SkeletonEffect />
        </div>
        <div className={cx('gallery-item')}>
          <SkeletonEffect />
        </div>
      </div>

      {/* sections */}
      {Array(2)
        .fill()
        .map((item, index) => (
          <div key={index} className={cx('section')}>
            <div className={cx('section-title')}>
              <SkeletonEffect />
            </div>
            <div className={cx('section-content')}>
              {Array(COUNT_ITEM)
                .fill()
                .map((item, index) => (
                  <div key={index} className={cx('section-item')}>
                    <div className={cx('section-item-header')}>
                      <SkeletonEffect />
                    </div>
                    <div className={cx('section-item-title')}>
                      <SkeletonEffect />
                    </div>
                    <div className={cx('section-item-desc')}>
                      <SkeletonEffect />
                    </div>
                    <div className={cx('section-item-desc')}>
                      <SkeletonEffect />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );

  const ChartSkeleton = () => (
    <div>
      {Array(10)
        .fill()
        .map((item, index) => (
          <div key={index} className={cx('chart-wrapper')}>
            <div className={cx('music')}>
              <div className={cx('thumb')}>
                <SkeletonEffect />
              </div>
              <div className={cx('info')}>
                <div className={cx('name')}>
                  <SkeletonEffect />
                </div>
                <div className={cx('singer')}>
                  <SkeletonEffect />
                </div>
              </div>
            </div>
            <div className={cx('album')}>
              <SkeletonEffect />
            </div>
            <div className={cx('duration')}>
              <SkeletonEffect />
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <div>
      {type === 'feed' && <FeedSkeleton />}
      {type === 'chart' && <ChartSkeleton />}
    </div>
  );
};

export default Skeletion;
