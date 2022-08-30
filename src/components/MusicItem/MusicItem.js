import classNames from 'classnames/bind';

import styles from './MusicItem.module.scss';

const cx = classNames.bind(styles);

const MusicItem = () => {
  return <div className={cx('wrapper')}></div>;
};

export default MusicItem;
