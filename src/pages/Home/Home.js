import { useEffect, useReducer } from 'react';
import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';

import styles from './Home.module.scss';
import request from '~/requests';
import Gallery from './components/Gallery';
import Section from '~/components/Section/Section';
import AlbumItem from '~/components/AlbumItem';

import initialState from './initialState';
import {
  ADD_BANNER,
  ADD_NEW_DAY,
  ADD_FAV_ARTIST,
  ADD_NEW_SONGS_EVERY_DAY,
  ADD_WEEKCHART,
  ADD_TOP100,
  ADD_NEW_SONGS,
  ADD_ALBUMS,
  ADD_XONE_CORNER,
  ADD_EVENTS,
} from './actions';
import reducer from './reducer';
import ArtistItem from '~/components/ArtistItem';
import AvatarItem from '~/components/AvatarItem';
import Button from '~/components/Button/Button';

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
        type: ADD_NEW_SONGS_EVERY_DAY,
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
      dispatch({
        type: ADD_NEW_SONGS,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hNewrelease') || {},
      });
      dispatch({
        type: ADD_ALBUMS,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hAlbum') || {},
      });
      dispatch({
        type: ADD_XONE_CORNER,
        payload: res?.data?.items?.find((item) => item.sectionId === 'hXone') || {},
      });
      dispatch({
        type: ADD_EVENTS,
        payload: res?.data?.items?.find((item) => item.sectionType === 'event') || {},
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
      <Section title={state?.newSongsEveryDay?.title}>
        {state?.newSongsEveryDay?.items?.map((item) => (
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
      <Section flex title={state?.newSongs?.title}>
        {state?.newSongs?.items
          ?.filter((item, index) => index < 3)
          .map((item, index) => (
            <div key={item.encodeId} className={cx('music-card')}>
              <div className={cx('music-card-img')}>
                <div className={cx('music-card-overlay')}>
                  <span className={cx('play-btn')}>
                    <PlayOutline />
                  </span>
                </div>
                <img src={item.thumbnailM} alt="" />
              </div>
              <div className={cx('music-card-body')}>
                <div className={cx('music-card-header')}>
                  <h3 className={cx('music-card-title')}>{item.title}</h3>
                  <p className={cx('music-card-singer')}>{item.artistsNames}</p>
                </div>
                <div className={cx('music-card-footer')}>
                  <span className={cx('music-card-rank')}>#{index + 1}</span>
                  <span className={cx('music-card-date')}>10.03.2003</span>
                </div>
              </div>
            </div>
          ))}
      </Section>

      {/* hAlbum */}
      <Section>
        {state?.albums?.items
          ?.filter((item, index) => index < 5)
          .map((item) => (
            <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
          ))}
      </Section>

      {/* hXone */}
      <Section title={state?.xoneCorner?.title}>
        {state?.xoneCorner?.items
          ?.filter((item, index) => index < 5)
          .map((item) => (
            <AlbumItem key={item.encodeId} data={item} className={cx('section-item')} />
          ))}
      </Section>

      {/* Sự kiện */}
      <Section flex title={state?.events?.title}>
        {state?.events?.items
          ?.filter((item, index) => index < 3)
          .map((item) => (
            <div key={item.encodeId} className={cx('event-card')}>
              <div className={cx('event-card-header')}>
                <img src={item.coverHM} alt="" />
                <div className={cx('event-card-info')}>
                  <span className={cx('event-card-label')}>{item.label}</span>
                  <h3 className={cx('event-card-title')}>{item.title}</h3>
                  <p className={cx('event-card-timestamp')}>11:00 Thứ sáu, 16 tháng 9</p>
                </div>
              </div>
              <div className={cx('event-card-fotter')}>
                <div className={cx('event-card-care')}>
                  <p className={cx('event-card-care-title')}>Lượt quan tâm</p>
                  <div className={cx('event-card-care-list')}>
                    <span className={cx('event-card-care-number')}>
                      +{item.totalFollow - item.followers.length}
                    </span>
                    {item.followers.map((follower) => (
                      <AvatarItem key={follower.id} small img={follower.avatar} />
                    ))}
                  </div>
                </div>
                <Button large solid>
                  QUAN TÂM
                </Button>
              </div>
            </div>
          ))}
      </Section>
      <div className={cx('ahihi')}></div>
    </main>
  );
};

export default Home;
