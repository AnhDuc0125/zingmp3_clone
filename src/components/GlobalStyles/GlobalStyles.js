import classNames from 'classnames';

import styles from './GlobalStyles.module.scss';

const cx = classNames.bind(styles);

console.log(styles);
const GlobalStyles = ({ children }) => {
  return <div className={cx('wrapper')}>{children}</div>;
};

export default GlobalStyles;
