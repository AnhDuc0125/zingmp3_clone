import classNames from 'classnames/bind';
import {
  UmbrellaFull,
  ThreeStars,
  ShareIos,
  Settings,
  User,
  Prohibition,
  Music2,
  Cloud,
  InfoEmpty,
  WhiteFlag,
  Phone,
  Megaphone,
  Page,
  ShieldCheck,
} from 'iconoir-react';

import styles from './Header.module.scss';
import Popper from '~/components/Popper';

const cx = classNames.bind(styles);

const settings = [
  { title: 'Danh sách chặn', icon: Prohibition, isClientSetting: true },
  { title: 'Chất lượng nhạc', icon: Music2, isClientSetting: true },
  { title: 'Giao diện', icon: Cloud, isClientSetting: true },
  { title: 'Giới thiệu', icon: InfoEmpty },
  { title: 'Góp ý', icon: WhiteFlag },
  { title: 'Liên hệ', icon: Phone },
  { title: 'Quảng cáo', icon: Megaphone },
  { title: 'Thỏa thuận sử dụng', icon: Page },
  { title: 'Chính sách bảo mật', icon: ShieldCheck },
];

const themePopper = (attrs) => {};

const settingPopper = (attrs) => (
  <div {...attrs}>
    <Popper>
      <div className={cx('setting-client')}>
        {settings
          .filter((item) => item.isClientSetting)
          .map((setting, index) => {
            const Icon = setting.icon;
            return (
              <div key={index} className={cx('setting-item')}>
                <span className={cx('setting-icon')}>
                  <Icon />
                </span>
                {setting.title}
              </div>
            );
          })}
      </div>
      <div className={cx('setting-core')}>
        {settings
          .filter((item) => !item.isClientSetting)
          .map((setting, index) => {
            const Icon = setting.icon;
            return (
              <div key={index} className={cx('setting-item')}>
                <span className={cx('setting-icon')}>
                  <Icon />
                </span>
                {setting.title}
              </div>
            );
          })}
      </div>
    </Popper>
  </div>
);

const actionList = [
  { type: 'theme', popper: themePopper, icon: UmbrellaFull, tooltip: 'Chủ đề' },
  { type: 'vip', popper: themePopper, icon: ThreeStars, tooltip: 'Nâng cấp VIP' },
  { type: 'upload', popper: themePopper, icon: ShareIos, tooltip: 'Tải lên' },
  { type: 'setting', popper: settingPopper, icon: Settings, tooltip: 'Cài đặt' },
  { type: 'avatar', popper: themePopper, icon: User },
];

export { actionList };
export { default } from './Header';
