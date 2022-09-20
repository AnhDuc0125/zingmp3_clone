import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import useSimpleFetch from '~/hooks/useSimpleFetch';

import styles from './Album.module.scss';

const cx = classNames.bind(styles);

const Album = () => {
  const { id } = useParams();
  const [album, loading] = useSimpleFetch(`playlist/${id}`);
  console.log(album);
  return <div className={cx('wrapper')}></div>;
};

export default Album;
