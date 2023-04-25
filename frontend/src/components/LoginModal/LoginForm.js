import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
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
    <form onSubmit={handleSubmit}>
      <ul id='errors'>
        {errors.map(error => <li key={error}>{error}</li>)}
      </ul>
      <h3 className='welcome-box' id='welcome-box'>Welcome to Airdnd</h3>
      <div className='modal-form-box'>
        <input
          className="modal-input-box"
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          placeholder='Email'
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
  );
}

export default LoginForm;