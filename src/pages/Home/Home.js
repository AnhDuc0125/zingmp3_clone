import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Gallery from './components/Gallery';
// import homeRequest from '~/requests/homeRequest';
import Section from '~/components/Section/Section';
import request from '~/requests';

const cx = classNames.bind(styles);

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await request.get('home');
      return response.data;
    };

    getData().then((res) => {
      setData(res?.data?.items);
    });
    console.log(data);
  }, []);
  return (
    <main className={cx('wrapper')}>
      <Gallery data={data.find((item) => item.sectionType === 'banner')} />
      <Section data={data.find((item) => item.sectionType === 'recentPlaylist')} />
    </main>
  );
};

export default Home;
