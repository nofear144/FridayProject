import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from "./Header.module.css"


export function Header() {
    return (
        <div>

            <div className={s.header}>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
                <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
                <NavLink to={PATH.RESET_PASSWORD}>Reset Password</NavLink>
                <NavLink to={PATH.NEW_PASSWORD}>New Password</NavLink>
                <NavLink to={PATH.TEST}>Test</NavLink>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>
            </div>

        </div>

    )
}