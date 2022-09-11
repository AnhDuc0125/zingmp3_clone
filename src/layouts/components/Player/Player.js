import classNames from 'classnames/bind';
import * as Icon from 'iconoir-react';

import styles from './Player.module.scss';
import MusicItem from '~/components/MusicItem';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const Player = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('playing-song')}>
        <MusicItem name={'Có Em Chờ'} singer={'MIN'} heightFull />
      </div>
      <div className={cx('controller')}>
        <div className={cx('controller-area')}>
          <div className={cx('controller-inner')}>
            <Button transparent circled size={'22px'} className={cx('shuffle')}>
              <Icon.Shuffle />
            </Button>
            <Button transparent circled size={'26px'} className={cx('prev')}>
              <Icon.SkipPrevOutline fill="white" />
            </Button>
            <div className={cx('toggle-play')}>
              <Button transparent circled size={'26px'} className={cx('play-btn')}>
                <Icon.PlayOutline fill="white" width={'1em'} />
              </Button>
              <Button transparent circled size={'26px'} className={cx('pause-btn')}>
                <Icon.PauseOutline fill="white" width={'1em'} />
              </Button>
            </div>
            <Button transparent circled size={'26px'} className={cx('next')}>
              <Icon.SkipNextOutline fill="white" />
            </Button>
            <Button transparent circled size={'26px'} className={cx('repeat')}>
              <Icon.Repeat />
            </Button>
          </div>
        </div>
        <div className={cx('duration')}>
          <span className={cx('current-time')}>02:12</span>
          <input type="range" min="0" max="100" className={cx('duration-bar')} />
          <span className={cx('total-duration')}>03:57</span>
        </div>
      </div>
      <div className={cx('actions')}>
        <div className={cx('main')}>
          <Button transparent circled size={'36px'} className={cx('mv')}>
            <Icon.YouTube />
          </Button>
          <Button transparent circled size={'36px'} className={cx('lyric')}>
            <Icon.Music2 />
          </Button>
          <Button transparent circled size={'36px'} className={cx('picture-in-picture')}>
            <Icon.MultiWindow />
          </Button>
          <Button transparent circled size={'36px'} className={cx('volumn')}>
            <Icon.SoundHigh />
          </Button>
        </div>
        <div className={cx('sub')}>
          <Button secondary size={'30px'} squared className={cx('show-playlist')}>
            <Icon.Playlist />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;
