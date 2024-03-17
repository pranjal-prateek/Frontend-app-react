import React, { useEffect, useMemo, useReducer, useState } from 'react';
import SkeletonLoader from '../atoms/skeletonShimmer/SkeletonLoader';
import ImageContainer from './ImageContainer';
import { useSearch } from '../../context/SearchContext';

const ImageRenderer = ({ data = [],loaded }) => {

      console.log(data)
    const [filteredData, setFilteredData] = useState(data);
    const { searchText } = useSearch();
    
    useEffect(() => {
      let searchTimeout;
  

      const debouncedSearch = (value) => {
        clearTimeout(searchTimeout);
        if (value.length >= 3) {
          searchTimeout = setTimeout(() => {
            const filteredResults = data.filter(
              (link) =>
                link &&
                !link.endsWith('srt') &&
                !link.endsWith('vtt') &&
                link.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filteredResults);
          }, 300); 
        } else {
          let filData =data.filter(
            (link) =>
              link &&
              !link.endsWith('srt') &&
              !link.endsWith('vtt') 
          );
          setFilteredData(filData);
        }
      }
      debouncedSearch(searchText);
      return () => clearTimeout(searchTimeout);
    }, [data, searchText]);

    console.log(filteredData)
    return(
  <div>
    <div className='container'>
      {loaded ? (
        <ImageContainer data={filteredData} />
      ) : (
        <ImageContainerSkeleton />
      )}
    </div>
  </div>
)};

const ImageContainerSkeleton = () => (
  <div className='imageContainer'>
    {Array.from({ length: 10 }, (_, index) => (
      <div key={index} className='image'>
        <SkeletonLoader />
      </div>
    ))}
  </div>
);

export default ImageRenderer;
