import React from 'react';
import PropTypes from 'prop-types';
import InputBox from '../atoms/inputs/InputBox';
import Label from '../atoms/label/Label';
import Button from '../atoms/buttons/Button';
import { login } from '../../strings/string';
const LoginForm = ({ state, dispatch, onSubmit, showLoader }) => {
  return (
    <form onSubmit={onSubmit} className="login-form">
      <h2 className='text-white text-lg'>Login</h2>
      <div className="form-group">
        <Label htmlFor="username" text="Username" />
        <InputBox
          type="text"
          id="username"
          placeholder="Enter your Username"
          value={state.username}
          onChange={(e) => {
            dispatch({ type: 'username', payload: e.target.value });
          }}
          required={true}
        />
      </div>
      <div className="form-group">
        <Label htmlFor="password" text="Password" />
        <InputBox
          type="password"
          id="password"
          placeholder="Enter your password"
          value={state.password}
          onChange={(e) => {
            dispatch({ type: 'password', payload: e.target.value });
          }}
          required={true}
        />
        {state.error && <span className="error">&#9888; {state.error}</span>}
      </div>
      <Button
        type="submit"
        disabled={state.username === '' || state.password === ''}
        text={login}
        showLoader={showLoader}
      />
    </form>
  );
};

LoginForm.propTypes = {
  state: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  showLoader: PropTypes.bool.isRequired,
};

export default LoginForm;
