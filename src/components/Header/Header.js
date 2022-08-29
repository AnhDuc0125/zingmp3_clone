import classNames from 'classnames/bind';
import { ArrowLeft, ArrowRight } from 'iconoir-react';
import Tippy from '@tippyjs/react/headless';
import ToolTip from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Header.module.scss';
import SearchBox from './components/SearchBox';
import Button from '../Button/Button';
import { actionList } from '.';

const cx = classNames.bind(styles);

const Header = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('navigate')}>
        <Button circled transparent offset={'left'} className={cx('prev', 'arrow')}>
          <ArrowLeft />
        </Button>
        <Button circled transparent offset={'left'} className={cx('next', 'arrow')}>
          <ArrowRight />
        </Button>
        <div className={cx('search-box')}>
          <SearchBox />
        </div>
      </div>
      <div className={cx('actions')}>
        {/* <Button circled className={cx('theme', 'action-btn')}>
          <UmbrellaFull />
        </Button>
        <Button circled className={cx('vip', 'action-btn')}>
          <ThreeStars />
        </Button>
        <Button circled className={cx('upload', 'action-btn')}>
          <ShareIos />
        </Button>
        <Button circled className={cx('setting', 'action-btn')}>
          <Settings />
        </Button>
        <Button circled className={cx('avatar', 'action-btn')}>
          <Settings />
        </Button> */}
        {actionList.map((actionItem, index) => {
          const Icon = actionItem.icon;
          const props = {
            content: actionItem.tooltip,
            duration: 300,
            className: cx('tooltip'),
          };

          if (!actionItem.tooltip) {
            props.disabled = true;
          }

          return (
            <div key={index}>
              <ToolTip {...props}>
                <Tippy interactive trigger={'click'} render={actionItem.popper} placement={'bottom-end'}>
                  <Button circled className={cx('avatar', 'action-btn')}>
                    <Icon></Icon>
                  </Button>
                </Tippy>
              </ToolTip>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
