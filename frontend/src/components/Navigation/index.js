import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton.js';
import LoginFormModal from '../LoginModal/index.js';
import SignupFormModal from '../SignupModal/index.js';
import './Navigation.css';

function Navigation() {
  // const sessionUser = useSelector(state => state.session.user);

  return (
    <ul id='nav-bar'>
      <li id='home-icon'>
        <NavLink exact to="/">AirDnD</NavLink>
      </li>
      <li>
        
      </li>
      <li id='profile-btn-box'>
        <ProfileButton id='profile-btn' />
      </li>
    </ul>
  );
}

export default Navigation;