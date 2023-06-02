import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css'
import { Link } from "react-router-dom";

function SignupForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthdate, setBirthdate] = useState("")
  const [errors, setErrors] = useState([]);
  const [checked, setChecked] = useState(false)

  const handleCheck = () => {
    setChecked(!checked)
    // console.log(checked)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setErrors([]);
    // if(checked) {
      return dispatch(sessionActions.signup({ email, password, firstName, lastName, birthdate }))
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
    // } 
  };

  return (
    <div id='signup-form'>
      <div id='signup-message'>
        <p id='signup-msg'>Signing up</p>
        <hr />
      </div>
      <div id='modal-form-two'>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map(error => <li key={error}>{error}</li>)}
          </ul>
          <div className='modal-form-box' id='modal-form-box'>
            <input id='name-box'
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              required
            />
            <input id='name-box'
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              required
            />
          </div>
          <p id='name-msg'>Make sure it matches the name on your government ID.</p>
          <div id='birthdate-form-box'>
            <input id='input-box'
              type="text" 
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              placeholder="Birthdate (dd/mm/yyyy)"
              required
            />
          </div>
          <p id='birthdate-msg'>To sign up, you need to be at least 18. Your birthday won't be shared with other people who use Airbnb</p>
          <div id='email-form-box'>
            <input id='input-box'
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              required
            />
          </div>
          <p id='email-msg'>We'll email you trip confirmations and receipts</p>
          <div id='password-box'>
            <input id='input-box'
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <p id='marketing-msg'>We'll send you marketing promotions, special offers, inspiration, and policy updates via email.</p>
          <div id='checkbox-container'>
            <div id='checkbox-div'>
              <input id='checkbox'
                type="checkbox"
                defaultChecked={checked}
                onChange={handleCheck}
              />
              <div id='marketing-opt-div'>
              
                I don't want to receive marketing messages from Airdnd. 
                I can also opt out of receiving these at any time in my account settings or via the link in the message.
              </div>
            </div>
          </div>
          <div id='terms-and-conditions-container'>
            <div id='terms-and-conditions-box'>
              <p>By selecting Agree and continue below, I agree to Airdnd's 
                <Link> Terms of Service, </Link>
                <Link>Payments Terms of Service, </Link>
                <Link>Privacy Policy, </Link>and
                <Link> Nondiscrimination Policy</Link>
              </p>
            </div>
          </div>
          <div id='signup-submit-box'>
            <button id='signup-submit-btn' type="submit">Agree and continue</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
  