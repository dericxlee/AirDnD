import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileButton from './ProfileButton.js';
import './Navigation.css';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min.js';
import SearchBar from '../SearchBar/index.js';
import { useSelector } from 'react-redux';

function Navigation() {
  const sessionUser = useSelector(state => state.session.user);

  let welcome;

  if(sessionUser){
    welcome = <div className='welcome-user-box'>
      Welcome, {sessionUser?.firstName}!
    </div>
  };

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
        <a id='github-box' href="https://github.com/dericxlee">
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="github" />
        </a>
        <a id='linkedin-box' href="https://www.linkedin.com/in/deric-lee-940923106/">
          <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin" />
        </a>
      </div>
      <div id='search-bar-span-box'>
        <div id='search-bar-box'>
          <SearchBar/>
        </div>
      </div>
      <div id='utility-box'>
        {welcome}
        <div id='language-btn-box'>
          <button className='hidden-button' id='language-btn' disabled>
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