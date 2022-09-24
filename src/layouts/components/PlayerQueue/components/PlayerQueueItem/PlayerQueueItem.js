import classNames from 'classnames/bind';
import { PlayOutline } from 'iconoir-react';
import { useDispatch } from 'react-redux';

import styles from './PlayerQueueItem.module.scss';
import Image from '~/components/Image';
import { setCurrentSong, setSrcCurrentSong } from '~/redux/musicSlice';
import ArtistLink from '~/components/ArtistLink';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import { useEffect } from 'react';

const cx = classNames.bind(styles);

const handlePlayMusic = (dispatch, { indexOfSong, srcSong }) => {
  dispatch(setCurrentSong(indexOfSong));
};

const PlayerQueueItem = ({ data, isPlaying, indexOfSong }) => {
  const dispatch = useDispatch();
  const [srcSong, loading] = useSimpleFetch('song/', data?.encodeId, null);

  useEffect(() => {
    isPlaying && dispatch(setSrcCurrentSong(srcSong[128]));
  }, [isPlaying, dispatch, srcSong]);

  const classes = {
    playing: isPlaying,
    loading,
  };

  return (
    <div
      className={cx('wrapper', { ...classes })}
      onClick={() => handlePlayMusic(dispatch, { indexOfSong, srcSong: srcSong[128] })}
    >
      <div className={cx('disabled-overlay')}></div>
      <div className={cx('music')}>
        <div className={cx('thumb')}>
          <Image src={data?.thumbnailM} alt="" />
          <span className={cx('play-icon')}>
            <PlayOutline fill="white" color="white" />
          </span>
        </div>
        <div className={cx('info')}>
          <span className={cx('name')}>{data?.title}</span>
          <p className={cx('singer')}>
            {data?.artists?.map((artist) => (
              <ArtistLink
                key={artist.id}
                to={`/artist/${artist.alias}`}
                onClick={(e) => e.stopPropagation()}
              >
                {artist.name}
              </ArtistLink>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerQueueItem;
