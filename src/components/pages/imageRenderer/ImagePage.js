import React, { useReducer, useState } from 'react';
import ImageRenderer from '../../organism/ImageRenderer';
import './image.css'
import useFetchData from '../../../hooks/useFetchData';
import {API} from '../../../constants/constants';

const ImagePage = () => {

  const { data: imageData, loaded } = useFetchData(API);
  return (
  <div>
    <ImageRenderer data={imageData} loaded={loaded} />
  </div>
)};

export default ImagePage;
