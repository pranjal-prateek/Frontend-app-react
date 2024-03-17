import React from 'react';
import ImageLink from '../molecules/ImageLink';

const ImageContainer = ({ data }) => (
  <div className='imageContainer'>
    {data.map((item, index) => (
      <div key={index} className='image'>
        <ImageLink imageUrl={item} linkUrl={item} alt="NOT AVAILABLE" width="400px" height="200px" />
      </div>
    ))}
  </div>
);

export default ImageContainer;
