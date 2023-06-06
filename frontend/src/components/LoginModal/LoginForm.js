import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css'
import DemoButton from '../DemoButton';

const LoginForm = ({handleClose}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
      .catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
  }

  return (
    <div className='session-form'>
      <div className='session-msg-box'>
        <p id='login-msg'>Log in</p>
        <hr />
      </div>
      <div className='login-form-box' id='modal-form'>
        <div className='welcome-box' id='welcome-box'>Welcome to Airdnd</div>
        <div className='modal-form-box'>
          <input
            className="modal-input-box"
            id='email-input'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email Address'
          />
          <input
            className="modal-input-box"
            id='password-input'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Password'
          />
        </div>
        <div className='privacy-policy-box' id='privacy-policy'>
          <div className='error-box'>
            {errors}
          </div>
          <div className='privacy-policy'>
            Privacy Policy
          </div>
        </div>
        <div className='submit-box'>
          <button className='submit-btn' onClick={handleSubmit}>Continue</button>
        </div>
      </div>
      <div className='break-line'>
        <div>
          <hr />
        </div>
        <div id='break-line-or'>or</div>
        <div>
          <hr />
        </div>
      </div>
      <div className='modal-social-media'><DemoButton/></div>
      <button onClick={handleClose} className='close-button'>X</button>
    </div>
  );
}

export default LoginForm;