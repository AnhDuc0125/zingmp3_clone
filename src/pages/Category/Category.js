import classNames from 'classnames/bind';

import styles from './Category.module.scss';
import Section from '~/components/Section';
import useSimpleFetch from '~/hooks/useSimpleFetch';
import CategoryItem from '~/components/CategoryItem';

const cx = classNames.bind(styles);

const Category = () => {
  const [categories, loading] = useSimpleFetch('category', {});
  console.log('Category ~ categories', categories);
  return (
    <main className={cx('wrapper')}>
      <div className={cx('banner')}>
        {categories.banners && <img src={categories?.banners[0]?.cover} alt="" />}
      </div>

      <Section grid title={'Tâm trạng và hoạt động'}>
        {categories?.topic?.map((item) => (
          <CategoryItem />
        ))}
      </Section>
    </main>
  );
};

export default Category;
