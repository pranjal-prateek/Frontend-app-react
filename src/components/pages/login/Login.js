// Page: Login.js
import React, { useReducer, useState } from 'react';
import LoginForm from '../../organism/LoginForm';
import { initialValue, reducer } from '../../../store/reducer';
import { useNavigate } from 'react-router-dom';
import {setToken} from '../../../utils/utils'
import './login.css';
import { homeRoute,loginAPI } from '../../../constants/constants';
const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();
console.log(showLoader);
  const handleLogin = async (event) => {
    event.preventDefault();
   
    try {
      const token = await login(state.username, state.password);
      if (token) {
        setToken('token', token);
        setTimeout(() => {
          navigate(homeRoute);
          setShowLoader(false);
        }, 5000); 
      } else {
        dispatch({ type: 'error', payload: 'Invalid username or password' });
      }
      
    } catch (error) {
      
      dispatch({ type: 'error', payload: 'An error occurred while logging in' });
    }

    
  };

  const login = async (username, password) => {
    setShowLoader(true);
    try {
      const response = await fetch("/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      const token = data.token;
      return token;
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  };

  return (
    <div className="login-container">
      <LoginForm state={state} dispatch={dispatch} onSubmit={handleLogin} showLoader={showLoader} />
    </div>
  );
};

export default Login;
