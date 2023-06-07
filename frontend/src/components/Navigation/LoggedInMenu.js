import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'
import './LoggedOutMenu.css'
import { NavLink, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function LoggedInMenu({user}){
    const dispatch = useDispatch()
    const history = useHistory()

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    }

    return (
        <div>
            <ul className='profile-dropdown-menu' id='login-menu'>
                <li><button>Messages</button></li>
                <li><button>Notifications</button></li>
                <li><NavLink to='/trips'><button>Trips</button></NavLink></li>
                <li><button>Wishlists</button></li>
                <hr />
                <li><NavLink to='/client'><button>Manage listings</button></NavLink></li>
                <li><button>Account</button></li>
                <hr />
                <li><button>Help</button></li>
                <li><button onClick={logout}>Log out</button></li>
            </ul>
        </div>
    )
}

export default LoggedInMenu