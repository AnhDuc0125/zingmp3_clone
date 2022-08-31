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
            <Button transparent circled size={'32px'} className={cx('shuffle')}>
              <Icon.Shuffle fill="white" />
            </Button>
            <Button transparent circled size={'32px'} className={cx('prev')}>
              <Icon.SkipPrevOutline fill="white" />
            </Button>
            <div className={cx('toggle-play')}>
              <Button transparent circled size={'32px'} className={cx('play-btn')}>
                <Icon.PlayOutline fill="white" />
              </Button>
              <Button transparent circled size={'32px'} className={cx('pause-btn')}>
                <Icon.PauseOutline fill="white" />
              </Button>
            </div>
            <Button transparent circled size={'32px'} className={cx('next')}>
              <Icon.SkipNextOutline fill="white" />
            </Button>
            <Button transparent circled size={'32px'} className={cx('repeat')}>
              <Icon.Repeat />
            </Button>
          </div>
        </div>
        <div className={cx('duration')}></div>
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
