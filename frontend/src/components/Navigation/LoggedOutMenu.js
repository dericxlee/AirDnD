import React from "react";
import DemoButton from "../DemoButton";
import LoginFormModal from "../LoginModal";
import SignupFormModal from "../SignupModal";
import './LoggedOutMenu.css'

function LoggedOutMenu() {
    return (
        <div>
            <ul id='profile-dropdown-menu'>
                <li><SignupFormModal/></li>
                <li><LoginFormModal/></li>
                <hr />
                <li><button>Airdnd your home</button></li>
                <li><button>Help</button></li>
            </ul>
        </div>
    )    
}

export default LoggedOutMenu;