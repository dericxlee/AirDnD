import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import LoginFormModal from "../LoginModal";
import SignupFormModal from "../SignupModal";
import DemoButton from "../DemoButton";
import './ProfileButton.css'

function ProfileButton() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [showMenu, setShowMenu] = useState(false);
  
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

  // const logout = (e) => {
  //   e.preventDefault();
  //   dispatch(sessionActions.logout());
  // };

  return (
    <div id='menu-btn-box'>
      <button id='menu-btn' onClick={toggleMenu}>Profile
        <i className="fa-solid fa-user-circle" />
      </button>
      {showMenu && (
        sessionLinks
      )}
    </div>
  );
}

export default ProfileButton;