import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = forwardRef(
  (
    {
      children,
      small = false,
      large = false,
      outline = false,
      solid = false,
      rounded = false,
      circled = false,
      transparent = false,
      offset,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    const methods = {
      onClick,
      ...props,
    };

    const classes = cx('wrapper', {
      rounded,
      circled,
      small,
      large,
      outline,
      solid,
      transparent,
      [className]: className,
      [offset]: offset,
    });

    return (
      <button ref={ref} className={classes} {...methods}>
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  small: PropTypes.bool,
  large: PropTypes.bool,
  outline: PropTypes.bool,
  solid: PropTypes.bool,
  rounded: PropTypes.bool,
  circled: PropTypes.bool,
  transparent: PropTypes.bool,
  offset: PropTypes.oneOf(['left', 'right']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  props: PropTypes.any,
};

export default Button;
