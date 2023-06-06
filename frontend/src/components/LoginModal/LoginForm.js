import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import './LoginForm.css'
import DemoButton from '../DemoButton';
import { useParams } from 'react-router-dom';
import SignupFormModal from '../SignupModal';

const LoginForm = () => {
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
        <form onSubmit={handleSubmit}>
          <h3 className='welcome-box' id='welcome-box'>Welcome to Airdnd</h3>
          <div className='modal-form-box'>
            <input
              className="modal-input-box"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email Address'
              required
            />
            <input
              className="modal-input-box"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
              required
            />
          </div>
            <p className='privacy-policy id='privacy-policy>Privacy Policy</p>
            <div className='submit-box'>
              <button className='submit-btn' type="submit">Continue</button>
            </div>
        </form>
      </div>
      <div id='modal-social-media'><DemoButton/></div>
    </div>
  );
}

export default LoginForm;