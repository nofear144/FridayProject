import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";


export function Header() {
    return (
        <div>

            <div>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
                <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
                <NavLink to={PATH.RESET_PASSWORD}>Recovery Password</NavLink>
                <NavLink to={PATH.NEW_PASSWORD}>New Password</NavLink>
                <NavLink to={PATH.TEST}>Test</NavLink>
            </div>

        </div>

    )
}