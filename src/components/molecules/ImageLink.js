import React from 'react';
import PropTypes from 'prop-types';
import Link from '../atoms/link/Link'; 
import Image from '../atoms/imagetag/Image.js';

const ImageLink = ({ imageUrl, linkUrl, alt, width, height, linkClassName, imageClassName }) => {
  return (
    <Link href={linkUrl} className={linkClassName}>
      <Image src={imageUrl} alt={alt} width={width} height={height} className={imageClassName} />
    </Link>
  );
};

ImageLink.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  linkClassName: PropTypes.string,
  imageClassName: PropTypes.string,
};

export default ImageLink;
