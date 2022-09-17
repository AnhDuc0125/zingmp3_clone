import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './WeekChart.module.scss';
import Button from '~/components/Button/';
import ChartItem from '../ChartItem';

const cx = classNames.bind(styles);

const WeekChart = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <h1>Việt Nam</h1>
        <Button circled primary size="30px">
          <PlayOutline fill="white" width="1.4rem" height="1.4rem" />
        </Button>
      </div>
      <div className={cx('content')}></div>
      <div className={cx('footer')}>
        <Button outline large transparent>
          Xem tất cả
        </Button>
      </div>
    </div>
  );
};

export default WeekChart;
