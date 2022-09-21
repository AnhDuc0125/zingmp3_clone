import classNames from 'classnames/bind';
import { Alarm, MoreHoriz } from 'iconoir-react';
import Tippy from '@tippyjs/react/headless';
import ToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './PlayerQueue.module.scss';
import Button from '~/components/Button/Button';
import MusicItem from '~/components/MusicItem';

const cx = classNames.bind(styles);

const PlayerQueue = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('tabs-container')}>
          <span className={cx('tab-item')}>Danh sách phát</span>
          <span className={cx('tab-item')}>Nghe gần đây</span>
        </div>
        <div className={cx('set-timer')}>
          <ToolTip content={'Hẹn giờ dừng phát nhạc'}>
            <Tippy interactive trigger={'click'} render={() => {}} placement={'bottom-end'}>
              <Button circled className={cx('action-btn')}>
                <Alarm />
              </Button>
            </Tippy>
          </ToolTip>
        </div>
        <div className={cx('more')}>
          <ToolTip content={'Khác'}>
            <Tippy interactive trigger={'click'} render={() => {}} placement={'bottom-end'}>
              <Button circled className={cx('action-btn', 'more-btn')}>
                <MoreHoriz fill="white" />
              </Button>
            </Tippy>
          </ToolTip>
        </div>
      </div>
      <div className={cx('body')}>
        <div className={cx('recently-played')}>
          {/* {Array(5)
            .fill(null)
            .map((item, index) => (
               <MusicItem key={index} name={'Có Em Chờ'} singer={'MIN'} /> 
            ))} */}
        </div>
        <div className={cx('in-queue')}>
          <h3 className={cx('in-queue-title')}>Tiếp theo</h3>
          {/* {Array(15)
            .fill(null)
            .map((item, index) => (
              <MusicItem key={index} name={'Có Em Chờ'} singer={'MIN'} />
            ))} */}
        </div>
      </div>
    </div>
  );
};

export default PlayerQueue;
