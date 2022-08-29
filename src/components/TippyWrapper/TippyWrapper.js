import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';

const TippyWrapper = ({ children }) => {
  return <Tippy>{children}</Tippy>;
};

TippyWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TippyWrapper;
