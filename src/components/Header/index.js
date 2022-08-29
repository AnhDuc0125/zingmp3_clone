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
  Rocket,
  ShoppingBag,
  LogOut,
} from 'iconoir-react';

import styles from './Header.module.scss';
import Popper, { PopperBlock } from '~/components/Popper';

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

const userOptions = [
  { title: 'Nâng cấp VIP', icon: Rocket },
  { title: 'Mua code VIP', icon: ShoppingBag },
  { title: 'Đăng xuất', icon: LogOut, isSeparate: true },
];

const defaultPopper = (attrs) => {};

const settingPopper = () => (
  <div>
    <Popper>
      <PopperBlock>
        {settings
          .filter((item) => item.isClientSetting)
          .map((setting, index) => {
            const Icon = setting.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {setting.title}
              </div>
            );
          })}
      </PopperBlock>
      <PopperBlock>
        {settings
          .filter((item) => !item.isClientSetting)
          .map((setting, index) => {
            const Icon = setting.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {setting.title}
              </div>
            );
          })}
      </PopperBlock>
    </Popper>
  </div>
);

const userPopper = () => (
  <div>
    <Popper>
      <PopperBlock>
        {userOptions
          .filter((item) => !item.isSeparate)
          .map((userOption, index) => {
            const Icon = userOption.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {userOption.title}
              </div>
            );
          })}
      </PopperBlock>
      <PopperBlock>
        {userOptions
          .filter((item) => item.isSeparate)
          .map((userOption, index) => {
            const Icon = userOption.icon;
            return (
              <div key={index} className={cx('option-item')}>
                <span className={cx('option-icon')}>
                  <Icon />
                </span>
                {userOption.title}
              </div>
            );
          })}
      </PopperBlock>
    </Popper>
  </div>
);

const actionList = [
  { type: 'theme', popper: defaultPopper, icon: UmbrellaFull, tooltip: 'Chủ đề' },
  { type: 'vip', popper: defaultPopper, icon: ThreeStars, tooltip: 'Nâng cấp VIP' },
  { type: 'upload', popper: defaultPopper, icon: ShareIos, tooltip: 'Tải lên' },
  { type: 'setting', popper: settingPopper, icon: Settings, tooltip: 'Cài đặt' },
  { type: 'avatar', popper: userPopper, icon: User },
];

export { actionList };
export { default } from './Header';
