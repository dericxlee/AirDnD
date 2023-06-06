import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import './ProfileButton.css'

const ProfileButton = () => {
    const sessionUser = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);
    // const [showModal, setShowModal] = useState(false)
  
    let sessionLinks;

    if(sessionUser){
      sessionLinks = (
        <LoggedInMenu user={sessionUser}/>
      )
    } else {
      sessionLinks = (
        <>
          <LoggedOutMenu/>
        </>
      )
    }

    const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
    };

    const closeMenu = () => {
      if(!document.getElementById('menu') && showMenu) setShowMenu(false)
    }

    const toggleMenu = () => {
      if(!showMenu) setShowMenu(true)
      if(showMenu) setShowMenu(false)
    }
    
    useEffect(() => {
      if (!showMenu || !sessionUser) return;

      const closeMenu = () => {
        setShowMenu(false);
      };

      document.addEventListener('click', closeMenu);
    
      return () => document.removeEventListener("click", closeMenu);
    }, [showMenu, sessionUser]);

    return (
      <div id='menu-btn-box'>
        <button id='menu-btn' onClick={toggleMenu}>
          <div id='menu-btn-inner-box'>
            <div id='menu-btn-left'>
              <img className='setting-icon' src="https://p7.hiclipart.com/preview/275/263/707/hamburger-button-computer-icons-menu-menu-thumbnail.jpg" alt="" />
            </div>
            <div id='menu-btn-right'>
              <img className="nav-avatar" src={sessionUser?.photoUrl}/>
            </div>
          </div>
        </button>
        {showMenu && (
          sessionLinks
        )}
      </div>
    );
}

export default ProfileButton;