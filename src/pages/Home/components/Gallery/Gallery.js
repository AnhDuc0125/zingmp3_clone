import { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { NavArrowLeft, NavArrowRight } from 'iconoir-react';

import styles from './Gallery.module.scss';
import { galleryImg } from '.';

const cx = classNames.bind(styles);

const Gallery = () => {
  const [toggle, setToggle] = useState(true);
  const [show, setShow] = useState([0, 1, 2]);
  const [first, current, last] = useMemo(() => {
    return show;
  }, [show]);
  const nextBtn = useRef();

  //click to set toggle --> reset timer
  useEffect(() => {
    const timerId = setInterval(() => {
      nextBtn.current.click();
    }, 5000);

    return () => {
      console.log('cleared');
      clearInterval(timerId);
    };
  }, [toggle]);

  const handleShowPrev = () => {
    setToggle(!toggle);
    setShow((prev) =>
      prev.map((showIndex) => {
        let newValue = showIndex - 1;
        if (showIndex <= 0) newValue = galleryImg.length - 1;
        return newValue;
      })
    );
  };

  const handleShowNext = () => {
    setToggle(!toggle);
    setShow((prev) =>
      prev.map((showIndex) => {
        let newValue = showIndex + 1;
        if (showIndex >= galleryImg.length - 1) newValue = 0;
        return newValue;
      })
    );
  };

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

      <span ref={nextBtn} onClick={handleShowNext} className={cx('next-btn', 'controller')}>
        <NavArrowRight />
      </span>
    </div>
  );
};

export default Gallery;
