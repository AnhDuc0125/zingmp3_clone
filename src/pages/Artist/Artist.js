import { useEffect, useReducer, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import styles from './Artist.module.scss';
import Button from '~/components/Button';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import { PlayOutline } from 'iconoir-react';
import Image from '~/components/Image';
import { getCompactNum } from '~/utils';
import reducer from './reducer';
import initialState from './initialState';
import request from '~/requests';
import ADD_ALL from './actions';

const cx = classNames.bind(styles);

const Artist = () => {
  const { alias } = useParams();
  const [artist, loading] = useSimpleFetch(`artist/${alias}`);

  // const [artist, dispatch] = useReducer(reducer, initialState);
  // const [loading, setLoading] = useState(true);
  console.log('Artist ~ artist', artist);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await request.get(`artist/${alias}`);
  //     return response.data;
  //   };

  //   const getData = function (res, sectionId, sectionType) {
  //     return res?.data?.items?.find(
  //       (item) =>
  //         (sectionId ? item.sectionId === sectionId : true) && item.sectionType === sectionType
  //     );
  //   };

  //   fetchData().then((res) => {
  //     const payload = {
  //       single: getData(res, undefined, "playlist") || {},
  //       album: getData(res, undefined, "playlist") || {},
  //       playlist: getData(res, undefined, "playlist") || {},
  //       represent: getData(res, undefined, "playlist") || {},
  //       mayYouLink: getData(res, undefined, "artist") || {},
  //     };

  //     dispatch({
  //       type: ADD_ALL,
  //       payload,
  //     });

  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('topping')}>
        <div className={cx('info')}>
          <h1 className={cx('name')}>{artist?.name}</h1>
          <p className={cx('desc')}>{artist?.sortBiography}</p>
          <div className={cx('button-group')}>
            <Button solid large>
              <PlayOutline fill="white" /> PHÁT NHẠC
            </Button>
            <Button outline transparent large>
              <span className={cx('btn-content')}>
                QUAN TÂM <span>&middot;</span>{' '}
                {artist.totalFollow && getCompactNum(artist?.totalFollow)}
              </span>
            </Button>
          </div>
          <div className={cx('lastest-song')}>
            <div className={cx('lasted-song-thumb')}>
              <Image src={artist?.topAlbum?.thumbnailM} alt={artist?.topAlbum?.title} />
              <div className={cx('overlay')}>
                <PlayOutline fill="white" />
              </div>
            </div>
            <div className={cx('lasted-song-body')}>
              <span>MỚI NHẤT</span>
              <p className={cx('lasted-song-title')}>{artist?.topAlbum?.title}</p>
              <p className={cx('lasted-song-timestamp')}>{artist?.topAlbum?.releaseDate}</p>
            </div>
          </div>
        </div>
        <div className={cx('thumb')}>
          <Image src={artist?.thumbnailM} alt={artist?.name} />
        </div>
      </div>
    </div>
  );
};

export default Artist;
