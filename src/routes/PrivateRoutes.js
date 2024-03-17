import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
import ImagePage from '../components/pages/imageRenderer/ImagePage';
import { getToken } from '../utils/utils';

const About = lazy(() => import('../components/pages/About'));
const Contact = lazy(() => import('../components/pages/ContactUs'));

const PrivateRoutes = ({ imageData, loaded }) => {
  const token = getToken('token');

  return (
   
    token ? <Outlet /> : <Navigate to="/login" />
  );
};

export default PrivateRoutes;
