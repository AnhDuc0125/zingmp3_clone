import classNames from 'classnames/bind';

import styles from './Radio.module.scss';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import Section from '~/components/Section';

const cx = classNames.bind(styles);

const Radio = () => {
  const [radio, loading] = useSimpleFetch('radio', {});
  console.log(radio);
  return <main className={cx('wrapper')}>{/* Live stream */}</main>;
};

export default Radio;
