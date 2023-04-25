import { useDispatch } from "react-redux";
import * as sessionActions from '../../store/session'

function LoggedInMenu({user}){
    const dispatch = useDispatch()
    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <div>
            <ul>
                <li>{user.firstName}</li>
                <li><button>Messages</button></li>
                <li><button>Notifications</button></li>
                <li><button>Trips</button></li>
                <li><button>Wishlists</button></li>
                <li><button>Airbnb your home</button></li>
                <li><button>Account</button></li>
                <li><button>Help</button></li>
                <li>
                    <button onClick={logout}>Log out</button>
                </li>
            </ul>
        </div>
    )
}

export default LoggedInMenu