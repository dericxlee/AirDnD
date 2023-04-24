import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton.js';
import LoginFormModal from '../LoginModal';
import SignupFormModal from '../SignupModal/index.js';
import DemoButton from '../DemoButton.js';
// import './Navigation.css';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);
  console.log(sessionUser)

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal/>
        <SignupFormModal/>
        <DemoButton/>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/">Home</NavLink>
        {sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;