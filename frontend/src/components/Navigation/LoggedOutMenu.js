import React from "react";
import LoginFormModal from "../LoginModal";
import SignupFormModal from "../SignupModal";
import './LoggedOutMenu.css'

const LoggedOutMenu = () => {
    return (
        <div>
            <ul className='profile-dropdown-menu' id='logout-menu'>
                <li><SignupFormModal/></li>
                <li><LoginFormModal/></li>
                <hr className='hidden-buttons'/>
                <li className='hidden-buttons'><button>Help</button></li>
            </ul>
        </div>
    )    
}

export default LoggedOutMenu;