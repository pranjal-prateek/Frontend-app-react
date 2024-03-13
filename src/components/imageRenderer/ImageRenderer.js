import React, { useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './image.css';
import 'react-loading-skeleton/dist/skeleton.css'

const ImageRenderer = ({ data = [], loaded = false, handleSearch }) => {
  const [searchtext, setSearchText] = useState('');

  const filteredData = data.filter(
    (link) =>
      !link.endsWith('srt') &&
      !link.endsWith('vtt') &&
      link.toLowerCase().includes(searchtext.toLowerCase())
  );


  return (
    <div>
      <div className='container'>
        {loaded ? (
          <div className='imageContainer'>
            {filteredData.map((item, index) => (
              <div key={index} className='image'>
                <a href={item} target='_blank' rel='noopener noreferrer'>
                  <img src={item} alt='NOT AVAILABLE'></img>
                </a>
              </div>
            ))}
          </div>
        ) : (
          <div className='imageContainer'>
            {Array.from({ length: 10 }, (_, index) => (
              <div className='image'>
                <SkeletonTheme baseColor="#000000" highlightColor="#36454F" style={{padding:'10px'}}>
                  <Skeleton height={200} width={400} duration={4} className=''/>
                </SkeletonTheme>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageRenderer;
