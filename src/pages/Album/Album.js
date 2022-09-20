import classNames from 'classnames/bind';
import { Link, useParams } from 'react-router-dom';
import ToolTip from '@tippyjs/react/';

import styles from './Album.module.scss';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import Button from '~/components/Button';
import { Heart, MoreHoriz, PlayOutline } from 'iconoir-react';
import ChartItem from '../ZingChart/components/ChartItem';
import { getCompactNum, getDate } from '~/utils';
import Skeleton from '~/components/Skeleton';
import Image from '~/components/Image';
import ArtistLink from '~/components/ArtistLink';

const cx = classNames.bind(styles);

const Album = () => {
  const { id } = useParams();
  const [album, loading] = useSimpleFetch(`playlist/${id}`);
  console.log(album);
  return (
    <div className={cx('wrapper')}>
      {loading ? (
        <Skeleton type="album" />
      ) : (
        <>
          <div className={cx('album-info')}>
            <div className={cx('thumb')}>
              <Image src={album?.thumbnailM} alt={album?.title} />
              <div className={cx('overlay')}>
                <span className={cx('play-btn')}>
                  <PlayOutline fill="white" />
                </span>
              </div>
            </div>
            <div className={cx('detail')}>
              <h3 className={cx('title')}>{album?.title}</h3>
              <p className={cx('updated-time')}>
                Cập nhật: {album.contentLastUpdate && getDate(album?.contentLastUpdate)}
              </p>
              <div className={cx('artist-links')}>
                {album?.artists?.map((artist) => (
                  <ArtistLink key={artist.id} to={`/artist/${artist.alias}`}>
                    {artist.name}
                  </ArtistLink>
                ))}
              </div>
              <p className={cx('favorites')}>
                {album.like && getCompactNum(album?.like)} người yêu thích
              </p>
            </div>
            <div className={cx('footer')}>
              <Button solid large>
                <PlayOutline fill="white" />
                TIẾP TỤC PHÁT
              </Button>
              <div className={cx('actions')}>
                <ToolTip content="Thêm vào thư viện">
                  <Button circled className={cx('action-btn')}>
                    <Heart />
                  </Button>
                </ToolTip>
                <ToolTip content="Khác">
                  <Button circled className={cx('action-btn')}>
                    <MoreHoriz />
                  </Button>
                </ToolTip>
              </div>
            </div>
          </div>
          <div className={cx('album-songs')}>
            {album.description && (
              <div className={cx('heading')}>
                <span className={cx('heading-text')}>Lời tựa</span> {album?.description}
              </div>
            )}
            <div className={cx('container')}>
              {album?.song?.items?.map((item) => (
                <ChartItem key={item.encodeId} data={item} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Album;
