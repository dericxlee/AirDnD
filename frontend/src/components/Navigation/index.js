import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton.js';
import './Navigation.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min.js';


function Navigation() {
  // const sessionUser = useSelector(state => state.session.user);

  const navigateHome = () => {
    // e.preventDefault()
    <Redirect to='/'/>
  }

  return (
    <div id='nav-bar'>
      <div id='home-icon-box'>
        <NavLink to='/'>
          <button id='home-icon-btn'>
            <div id='home-icon-logo-box'>
              <img id='home-icon-logo' src="https://companieslogo.com/img/orig/ABNB-4aaade0f.png?t=1633511992" alt="airdnd logo" />
              <p id='home-icon-name'>Airdnd</p>
            </div>
          </button>
        </NavLink>
      </div>
      <div id='search-bar-span-box'>
        <div id='search-bar-box'>
          <input id='search-bar' type="text" placeholder='Start your search' />
        </div>
      </div>
      <div id='utility-box'>
        <NavLink to='/'>
          <div id='creation-btn-box'>
              <button id='creation-btn'>Airdnd your home</button>
          </div>
        </NavLink>
        <div id='language-btn-box'>
          <button id='language-btn'>
            <img id='language-btn-logo' src="https://e7.pngegg.com/pngimages/556/45/png-clipart-globe-world-computer-icons-globe-miscellaneous-globe-thumbnail.png" alt="globe" />
          </button>
        </div>
        <div id='profile-btn-box'>
          <ProfileButton />
        </div>
      </div>
    </div>
  );
}

export default Navigation;