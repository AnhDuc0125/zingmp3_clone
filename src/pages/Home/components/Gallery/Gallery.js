import { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { NavArrowLeft, NavArrowRight } from 'iconoir-react';

import styles from './Gallery.module.scss';
import { galleryImg } from '.';

const cx = classNames.bind(styles);

const Gallery = () => {
  const [show, setShow] = useState([0, 1, 2]);

  const handleShowPrev = () => {
    setShow((prev) =>
      prev.map((showIndex) => {
        let newValue = showIndex - 1;
        if (showIndex <= 0) newValue = galleryImg.length - 1;
        return newValue;
      })
    );
  };

  const handleShowNext = () => {
    setShow((prev) =>
      prev.map((showIndex) => {
        let newValue = showIndex + 1;
        if (showIndex >= galleryImg.length - 1) newValue = 0;
        return newValue;
      })
    );
  };

  const [first, current, last] = useMemo(() => {
    return show;
  }, [show]);

  return (
    <div className={cx('wrapper')}>
      <span onClick={handleShowPrev} className={cx('prev-btn', 'controller')}>
        <NavArrowLeft />
      </span>

      <div className={cx('container')}>
        <div className={cx('background')}></div>
        {galleryImg.map((galleryItem, index) => {
          const classNameCond = {
            'first-item': first === index,
            'current-item': current === index,
            'last-item': last === index,
          };

          return (
            <div
              key={index}
              className={cx('gallery-item', {
                ...classNameCond,
                pending: ![first, current, last].includes(index),
              })}
            >
              <img src={galleryItem} alt="" className={cx('gallery-img')} />
            </div>
          );
        })}
      </div>

      <span onClick={handleShowNext} className={cx('next-btn', 'controller')}>
        <NavArrowRight />
      </span>
    </div>
  );
};

export default Gallery;