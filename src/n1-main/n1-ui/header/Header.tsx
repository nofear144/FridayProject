import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../n2-bll/store/store";
import {LogoutTC} from "../../n2-bll/reducers/login-reducer";


export function Header() {
    const dispatch = useDispatch()

    const isLogged = useSelector<rootReducerType, boolean>(state => state.login.isLogged)

    const onLogoutClick = () => {
        dispatch(LogoutTC())
    }

    return (
        <div>
            <div className={s.header}>
                {!isLogged
                    ?
                        <NavLink to={PATH.LOGIN}>Login</NavLink>
                    :
                        <a onClick={onLogoutClick}>Logout</a>
                    }

                <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
                <NavLink to={PATH.RESET_PASSWORD}>Reset Password</NavLink>
                <NavLink to={PATH.NEW_PASSWORD}>New Password</NavLink>
                <NavLink to={PATH.CHECK_EMAIL}>Check</NavLink>
                <NavLink to={PATH.TEST}>Test</NavLink>
                <NavLink to={PATH.PROFILE}>Profile</NavLink>

            </div>
        </div>

    )
}