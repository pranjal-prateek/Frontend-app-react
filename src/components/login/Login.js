import React, { useEffect, useReducer, useState } from 'react';
import { Navigate } from 'react-router-dom';
import './login.css'
import Buttons from '../atoms/buttons/Buttons';
import InputBox from '../atoms/inputs/InputBox';
import Label from '../atoms/label/Label';
import SearchBar from '../molecules/SearchBar';
const initialValue = {
  username: '',
  password: '',
  error: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return { ...state, username: action.payload };
    case 'password':
      return { ...state, password: action.payload };
    case 'error':
      return { ...state, error: action.payload };  
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const [loaded, setLoaded] = useState(false);
  const [disabled, setDisabled] = useState(false)
  const handleLogin = async (event) => {
    event.preventDefault();

    try {                                
      const token = await login(state.username, state.password);
      if (token) {
        localStorage.setItem('token', token);
        setLoaded(true);
      } else {
        dispatch({ type: 'error', payload: 'Invalid username or password' }); 
      }
    } catch (error) {
      dispatch({ type: 'error', payload: 'An error occurred while logging in' }); 
    }
  };
  useEffect(()=>{
    console.log(state.username +",,,"+ state.password)
    console.log(state.username==="" || state.password==="");
  },[state])
  
  const login = async (username, password) => {
    try {
      const response = await fetch('/api/login', {
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
      console.log('Token:', token);
      return token;
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  };
//folder str
//atomic design pattern to be implementd
//COMPONENTS AND PAGES SHOULD BE SEPAREATED 
//CONTEXT API TO BE IMPLEMENTED
//reducer logixc shld be moded to common storre
// precommit hooks to be setup looked at 
  return (
    <div className="login-container">
      {loaded ? (
        <Navigate to={'/getImages'} />
      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <h2>Login</h2>
          <div className="form-group">
            <Label htmlFor="username" text={"Username"}/>
            <InputBox
              type="text"
              id="username"
              placeholder="Enter your username"
              value={state.username}
              onChange={(e) => {dispatch({ type: 'username', payload: e.target.value })}}
              required={true}
            />
          </div>
          <div className="form-group">
            <Label htmlFor="password" text={"Password"}/>
            <InputBox
              type="password"
              id="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={(e) => {dispatch({ type: 'password', payload: e.target.value })}}
              required={true}
            />
             {state.error && <span className="error">	&#9888; {state.error}</span>}

          </div>
          <Buttons type={'submit'} disabled={state.username==="" || state.password===""} text="Login"/>
        </form>
      )}
    </div>
  );
};

export default Login;
