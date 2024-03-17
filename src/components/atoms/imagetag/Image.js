import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ src, alt ,width,height }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="rounded-lg shadow-2xl shadow-[#28283d]  hover:shadow-3xl cursor-pointer transform transition-transform duration-600 ease-in-out hover:scale-110"
      style={{ width: `${width}`, height: `${height}` }} 
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
