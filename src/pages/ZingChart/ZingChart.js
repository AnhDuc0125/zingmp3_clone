import { useState } from 'react';
import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './ZingChart.module.scss';
import Button from '~/components/Button/';
import ChartItem from './components/ChartItem/';
import WeekChartItem from './components/WeekChartItem';
import useSimpleFetch from '~/hooks/useSimpleFetch';

const cx = classNames.bind(styles);

const ZingChart = () => {
  const chart = useSimpleFetch('chart/home', {});
  console.log('ZingChart ~ chart', chart);
  const [show, setShow] = useState(10);

  return (
    <main className={cx('wrapper')}>
      <div className={cx('heading')}>
        <h1>#zingchart</h1>
        <Button circled primary>
          <PlayOutline fill="white" />
        </Button>
      </div>
      <div className={cx('content')}>
        {chart?.RTChart &&
          chart?.RTChart?.items?.map(
            (item, index) =>
              index < show && <ChartItem key={item.encodeId} data={item} rank={index + 1} />
          )}
      </div>
      {show === 10 && (
        <div className={cx('show-more-btn')}>
          <Button outline transparent large onClick={() => setShow(100)}>
            Xem top 100
          </Button>
        </div>
      )}

      {/* Bảng xếp hạng tuần */}
      <div className={cx('week-chart')}>
        <h2>Bảng xếp hạng tuần</h2>
      </div>
      <div className={cx('week-chart-container')}>
        {chart.hasOwnProperty('weekChart') &&
          Object.keys(chart?.weekChart)?.map((key) => (
            <WeekChartItem key={chart?.weekChart[key].chartId} data={chart?.weekChart[key]} />
          ))}
      </div>
    </main>
  );
};

export default ZingChart;
