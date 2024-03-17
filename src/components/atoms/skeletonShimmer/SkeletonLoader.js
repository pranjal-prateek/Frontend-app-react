import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
const SkeletonLoader = () => (
  <SkeletonTheme baseColor="#000000" highlightColor="#36454F">
    <Skeleton height={200} width={400} duration={4} />
  </SkeletonTheme>
);

export default SkeletonLoader;
