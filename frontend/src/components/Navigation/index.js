import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton.js';
import LoginFormModal from '../LoginModal/index.js';
import SignupFormModal from '../SignupModal/index.js';
// import './Navigation.css';

function Navigation() {
  // const sessionUser = useSelector(state => state.session.user);

  return (
    <ul>
      <li>
        <NavLink exact to="/">AirDnD</NavLink>
        <ProfileButton />
      </li>
    </ul>
  );
}

export default Navigation;