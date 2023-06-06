import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { Link } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("")
  const [errors, setErrors] = useState([]);
  // const [checked, setChecked] = useState(false)

  // const handleCheck = () => {
  //   setChecked(!checked)
  // };

  if(sessionUser){
    return (
      <Redirect to='/'/>
    );
  };

  const properDate = () => {
    const string = birthdate
    const month = string.slice(3, 6)
    const day = string.slice(0, 3)
    const year = string.slice(6)
    return month + day + year
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors([]);
    // if(checked) {
      return dispatch(sessionActions.signup({ 
          email: email, 
          password: properDate(), 
          firstName: firstName, 
          lastName: lastName, 
          birthdate: birthdate 
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
    // } 
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
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First name"
            required
          />
          <input className='name-input-box'
            type="text"
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
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            placeholder="Birthdate (mm/dd/yyyy)"
          />
          <p className='signup-message'>To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb</p>
        </div>

        <div className='signup-input-box'>
          <input className='input-box'
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
          <p className='signup-message'>We'll email you trip confirmations and receipts</p>
        </div>

        <div className='signup-input-box'>
          <input className='input-box'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <p className='signup-message'>We'll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>
        </div>
        <div className='error-box' id='signup-error'>Error</div>
        <div className='terms-and-conditions-box'>
              <p>By selecting Agree and continue below, I agree to Airdnd's Terms of Service,
                Payments Terms of Service,
                Privacy Policy, and
                Nondiscrimination Policy
              </p>
        </div>
        
        <button className='signup-submit-btn' onClick={handleSubmit}>Agree and continue</button>
        

      </div>
    </div>
  );
}

export default SignupForm;
  