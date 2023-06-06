import React from "react";
import LoginFormModal from "../LoginModal";
import SignupFormModal from "../SignupModal";
import './LoggedOutMenu.css'

const LoggedOutMenu = () => {
    return (
        <div>
            <ul id='profile-dropdown-menu'>
                <li><SignupFormModal/></li>
                <li><LoginFormModal/></li>
                <hr />
                <li><button>Help</button></li>
            </ul>
        </div>
    )    
}

export default LoggedOutMenu;