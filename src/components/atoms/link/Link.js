import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children,className }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer' className={`${className}`}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
