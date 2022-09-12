import { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Gallery from './components/Gallery';
import Section from '~/components/Section/Section';
import request from '~/requests';
import AlbumItem from '~/components/AlbumItem';

import initialState from './initialState';
import { ADD_BANNER, ADD_NEW_DAY, ADD_FAV_ARTIST } from './actions';
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
      dispatch({
        type: ADD_BANNER,
        payload: res?.data?.items?.find((item) => item.sectionType === 'banner') || {},
      });
      dispatch({
        type: ADD_NEW_DAY,
        payload: res?.data?.items?.find((item) => item.sectionType === 'playlist') || {},
      });
      dispatch({
        type: ADD_FAV_ARTIST,
        payload: res?.data?.items?.find((item) => item.sectionType === 'mix') || {},
      });
    });
  }, []);
  return (
    <main className={cx('wrapper')}>
      <Gallery data={state?.banner} />

      <Section title={state?.newDay?.title}>
        {state?.newDay?.items?.map((item) => (
          <AlbumItem key={item.encodeId} data={item} className={cx('newDay-item')} />
        ))}
      </Section>

      <Section title={state?.favoriteArtist?.title}>
        {state?.favoriteArtist?.items
          .filter((item, index) => index < 5)
          .map((item) => (
            <ArtistItem key={item.encodeId} data={item} className={cx('artist-item')} />
          ))}
      </Section>
    </main>
  );
};

export default Home;
