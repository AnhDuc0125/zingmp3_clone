import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './WeekChartItem.module.scss';
import Button from '~/components/Button';
import ChartItem from '../ChartItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const WeekChartItem = ({ data }) => {
  const SHOW_NUMBER = 5;
  const category = [
    { code: 'vn', title: 'Việt Nam' },
    { code: 'us', title: 'US-UK' },
    { code: 'korea', title: 'K-Pop' },
  ];

  console.log('WeekChartItem ~ data', data);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('heading')}>
        <h2>{category.map((cate) => cate.code === data.country && cate.title)}</h2>
        <Button circled primary size="30px">
          <PlayOutline fill="white" width="1.4rem" height="1.4rem" />
        </Button>
      </div>
      <div className={cx('content')}>
        {data?.items?.map(
          (item, index) => index < SHOW_NUMBER && <ChartItem small data={item} rank={index + 1} />
        )}
      </div>
      <div className={cx('footer')}>
        <Button outline large transparent>
          Xem tất cả
        </Button>
      </div>
    </div>
  );
};

export default WeekChartItem;
