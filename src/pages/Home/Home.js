import { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Gallery from './components/Gallery';
import Section from '~/components/Section/Section';
import request from '~/requests';
import AlbumItem from '~/components/AlbumItem';

import initialState from './initialState';
import {
  ADD_BANNER,
  ADD_NEW_DAY,
  ADD_FAV_ARTIST,
  ADD_NEW_SONGS,
  ADD_WEEKCHART,
  ADD_TOP100,
} from './actions';
import reducer from './reducer';
import ArtistItem from '~/components/ArtistItem';

const cx = classNames.bind(styles);

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('Home ~ state', state);

  useEffect(() => {
    const getData = async () => {
      const response = await request.get('home');
      return response.data;
    };

    getData().then((res) => {
      console.log('getData ~ res', res);
      dispatch({
        type: ADD_BANNER,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hSlider') || {},
      });
      dispatch({
        type: ADD_NEW_DAY,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hAutoTheme1') || {},
      });
      dispatch({
        type: ADD_FAV_ARTIST,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hMix') || {},
      });
      dispatch({
        type: ADD_NEW_SONGS,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hAutoTheme2') || {},
      });
      dispatch({
        type: ADD_WEEKCHART,
        payload: res?.data?.items?.find((item) => item.sectionType === 'weekChart') || [],
      });
      dispatch({
        type: ADD_TOP100,
        payload: res?.data?.items?.find((item) => item.sectionId === 'h100') || {},
      });
    });
  }, []);
  return (
    <main className={cx('wrapper')}>
      <Gallery data={state?.banner} />

      {/* Cứ chill thôi */}
      <Section title={state?.newDay?.title}>
        {state?.newDay?.items?.map((item) => (
          <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
        ))}
      </Section>

      {/* Nghệ sĩ yêu thích */}
      <Section title={state?.favoriteArtist?.title}>
        {state?.favoriteArtist?.items
          ?.filter((item, index) => index < 5)
          ?.map((item) => (
            <ArtistItem key={item.encodeId} data={item} className={cx('artist-item')} />
          ))}
      </Section>

      {/* Nhạc mới mỗi ngày */}
      <Section title={state?.newSongs?.title}>
        {state?.newSongs?.items?.map((item) => (
          <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
        ))}
      </Section>

      {/* Week Chart */}
      <Section flex>
        {state?.weekChart?.items?.map((item, index) => (
          <div key={index} className={cx('weekChart')}>
            <img src={item.cover} alt="" />
          </div>
        ))}
      </Section>

      {/* Top 100 */}
      <Section title={state?.top100?.title}>
        {state?.top100?.items
          ?.filter((item, index) => index < 5)
          .map((item) => (
            <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
          ))}
      </Section>

      {/* Nhạc mới */}
    </main>
  );
};

export default Home;
