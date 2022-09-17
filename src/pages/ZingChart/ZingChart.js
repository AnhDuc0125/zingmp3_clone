import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import request from '~/requests';
import styles from './ZingChart.module.scss';
import Button from '~/components/Button/Button';
import ChartItem from './components/ChartItem/ChartItem';

const cx = classNames.bind(styles);

const ZingChart = () => {
  const [chart, setChart] = useState([]);
  const [show, setShow] = useState(10);
  console.log('Home ~ chart', chart);

  useEffect(() => {
    const fetchData = async () => {
      const response = await request.get('chart/home');
      return response.data;
    };

    fetchData().then((res) => {
      setChart((prev) => [...prev, ...res?.data?.RTChart?.items]);
    });
  }, []);
  return (
    <main className={cx('wrapper')}>
      <div className={cx('heading')}>
        <h1>#zingchart</h1>
        <Button circled primary>
          <PlayOutline fill="white" />
        </Button>
      </div>
      <div className={cx('content')}>
        {chart &&
          chart?.map(
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
    </main>
  );
};

export default ZingChart;
