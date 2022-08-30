import classNames from 'classnames/bind';

import styles from './Player.module.scss';

const cx = classNames.bind(styles);

const Player = () => {
  return <div className={cx('wrapper')}></div>;
};

export default Player;
