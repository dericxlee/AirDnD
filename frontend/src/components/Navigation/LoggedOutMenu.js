import React from "react";
import DemoButton from "../DemoButton";
import LoginFormModal from "../LoginModal";
import SignupFormModal from "../SignupModal";

function LoggedOutMenu() {
    return (
        <div>
            <ul>
                <li><LoginFormModal/></li>
                <li><SignupFormModal/></li>
            </ul>
        </div>
    )    
}

export default LoggedOutMenu;