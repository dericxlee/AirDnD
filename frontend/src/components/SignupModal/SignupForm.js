import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import Errors from "../ListingCreate/Errors";

const SignupForm = ({handleClose}) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("")
  const [errors, setErrors] = useState([]);
  const [message, setMessage] = useState('')
  const [passwordMsg, setPasswordMsg] = useState('')

  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)
  const birthdateRef = useRef(null)

  const handleRef = (input) => {
    const currentInput = input.current;

    if(input && !currentInput?.value){
      currentInput.style.border = '2px solid red'
      setMessage('Fields cannot be blank')
    } else {
      currentInput.style.border = '1px solid black'
    };
  };

  const handlePassword = () => {
    const passwordInput = passwordRef.current;

    if(passwordRef && passwordInput?.value.length < 4){
      passwordInput.style.border = '2px solid red'
      setPasswordMsg('Password must be 4 characters or more')
    } else {
      passwordInput.style.border = '1px solid black'
      setPasswordMsg('')
    };
  };
  
  const properDate = (birthdate) => {
    const day = birthdate?.slice(3, 6)
    const month = birthdate?.slice(0, 3)
    const year = birthdate?.slice(6)
    return day + month + year
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handlePassword();
    handleRef(firstNameRef);
    handleRef(lastNameRef);
    handleRef(birthdateRef);
    handleRef(emailRef)
    
    setErrors([]);
      return dispatch(sessionActions.signup({ 
          email: email, 
          password: password, 
          firstName: firstName, 
          lastName: lastName, 
          birthdate: properDate(birthdate)
        })).catch(async (res) => {
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
  };

  if(sessionUser){
    return (
      <Redirect to='/'/>
    );
  };

  return (
    <div className='session-form'>
      <div className='session-msg-box'>
        <p id='signup-msg'>Sign up</p>
        <hr />
      </div>
      <div className='signup-form-box'>
        <div className='signup-name-box'>
          <input className='name-input-box'
            type="text"
            ref={firstNameRef}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
          <input className='name-input-box'
            type="text"
            ref={lastNameRef}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last name"
            required
          />
          <div className='signup-message' id='name-msg'>Make sure it matches the name on your government ID.</div>
        </div>

        <div className='signup-input-box'>
          <input className='input-box'
            type="text" 
            ref={birthdateRef}
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Birthdate (mm/dd/yyyy)"
          />
          <p className='signup-message'>To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb</p>
        </div>

        <div className='signup-input-box'>
          <input className='input-box'
            type="text"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <p className='signup-message'>We'll email you trip confirmations and receipts</p>
        </div>

        <div className='signup-input-box'>
          <input className='input-box'
            type="password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password (minimum 4 characters)"
          />
          <p className='signup-message'>We'll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>
        </div>
        <div className='error-box' id='signup-error' >{message}</div>
        <div className='error-box' id='signup-error' >{passwordMsg}</div>
        <div className='terms-and-conditions-box'>
              <p>By selecting Agree and continue below, I agree to Airdnd's Terms of Service,
                Payments Terms of Service,
                Privacy Policy, and
                Nondiscrimination Policy
              </p>
        </div>
        <button className='signup-submit-btn' onClick={handleSubmit}>Agree and continue</button>
      </div>
      <button className='close-button' onClick={handleClose}>X</button>
    </div>
  );
}

export default SignupForm;
  