import React from 'react'
import Buttons from '../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { homeRoute } from '../../constants/constants';
const ErrorPage = () => {
    const navigate = useNavigate();
    const handleRoute =()=>{
        console.log("this is an error page");
        navigate(homeRoute)
    }
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-300">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-gray-100 mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-300 mb-8">Oops! The page you're looking for could not be found.</p>
        <Buttons className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" text={"Go Back to home"} onClick={handleRoute}/>
      </div>
    </div>
  )
}

export default ErrorPage
