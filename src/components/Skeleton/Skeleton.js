import classNames from 'classnames/bind';
import { Minus } from 'iconoir-react';

import styles from './Skeleton.module.scss';
import SkeletonEffect from './SkeletonEffect';

const cx = classNames.bind(styles);

const Skeletion = ({ type }) => {
  const COUNT_ITEM = 5;

  const FeedSkeleton = () => (
    <div className={cx('feed-wrapper')}>
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
      <div className={cx('section')}>
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
    </div>
  );

  const ChartSkeleton = () => (
    <div className={cx('chart-wrapper')}>
      <div className={cx('chart-title')}>
        <SkeletonEffect />
      </div>
      {Array(10)
        .fill()
        .map((item, index) => (
          <div key={index} className={cx('chart-container')}>
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

  const CategorySkeleton = () => (
    <div className={cx('category-wrapper')}>
      <div className={cx('banner')}>
        <SkeletonEffect />
      </div>
      <div className={cx('activity')}>
        <div className={cx('activity-title')}>
          <SkeletonEffect />
        </div>
        <div className={cx('activity-container')}>
          {Array(8)
            .fill()
            .map((item, index) => (
              <div key={index} className={cx('activity-item')}>
                <SkeletonEffect />
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  const Top100Skeleton = () => (
    <div className={cx('top100-wrapper')}>
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

  const AlbumSkeleton = () => (
    <div className={cx('album-wrapper')}>
      <div className={cx('album-info')}>
        <div className={cx('album-thumb')}>
          <SkeletonEffect />
        </div>
        <div className={cx('album-title')}>
          <SkeletonEffect />
        </div>
        <div className={cx('album-desc')}>
          <div className={cx('album-desc-item')}>
            <SkeletonEffect />
          </div>
          <div className={cx('album-desc-item')}>
            <SkeletonEffect />
          </div>
          <div className={cx('album-desc-item')}>
            <SkeletonEffect />
          </div>
        </div>
      </div>
      <div className={cx('album-songs')}>
        <div className={cx('album-heading')}>
          <SkeletonEffect />
        </div>
        {Array(10)
          .fill()
          .map((item, index) => (
            <div key={index} className={cx('chart-container')}>
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
    </div>
  );

  return (
    <div>
      {type === 'feed' && <FeedSkeleton />}
      {type === 'chart' && <ChartSkeleton />}
      {type === 'category' && <CategorySkeleton />}
      {type === 'top100' && <Top100Skeleton />}
      {type === 'album' && <AlbumSkeleton />}
    </div>
  );
};

export default Skeletion;