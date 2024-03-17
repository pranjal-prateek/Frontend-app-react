import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route,Routes, useNavigate } from 'react-router-dom';
import Navbar from './components/organism/NavBar/Navbar';
import useFetchData from './hooks/useFetchData';
import { useLocation } from 'react-router-dom';
import { API, loginRoute } from './constants/constants';
import useOnlineStatus from './hooks/useOnlineStatus';
import { SearchProvider } from './context/SearchContext';
import { getToken } from './utils/utils';
import PrivateRoutes from './routes/PrivateRoutes';
import ImagePage from './components/pages/imageRenderer/ImagePage';
import { useOnline } from './context/OnlineContext';
import ErrorPage from './components/pages/ErrorPage';
const Login = lazy(() => import('./components/pages/login/Login'));
const About = lazy(() => import('./components/pages/About'));
const ContactUs = lazy(() => import('./components/pages/ContactUs'));
function App() {
  const location = useLocation();
  const path = location.pathname;
  const { data: imageData, loaded } = useFetchData(API);
  const {isOnline} =useOnline()
  const routes = [
    { path: 'home', element: <ImagePage /> },
    { path: 'about', element: <About /> },
    { path: 'contact', element: <ContactUs /> },
  ];
  return (
    <div>
      <SearchProvider>
        <Suspense fallback={<div>Loading...</div>}>
          {path === loginRoute ? null : <Navbar isOnline={isOnline}/>} 
          
           <Routes>
           <Route path={loginRoute} element={<Login />} />
           <Route path='/' element={<PrivateRoutes />}>
           {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
           </Route>
            <Route path="*" element={<ErrorPage />} />
           </Routes>
        </Suspense>
      </SearchProvider>
    </div>
  );
}

export default App;
