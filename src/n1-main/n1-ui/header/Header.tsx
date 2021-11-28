import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from "./Header.module.css"
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../n2-bll/store/store";
import {LogoutTC} from "../../n2-bll/reducers/login-reducer";
import React from "react";


export function Header() {
    const dispatch = useDispatch()

    const isLogged = useSelector<rootReducerType, boolean>(state => state.login.isLogged)

    const onLogoutClick = () => {
        dispatch(LogoutTC())
    }

    return (
        <div>


            <div className={s.header}>
                <div className={s.container}>
                    <h2>FunCards</h2>
                    <div>
                        <NavLink to={PATH.PROFILE}>Profile</NavLink>
                        <NavLink to={PATH.PACKS_LIST}>PackList</NavLink>
                    </div>
                    <div className={s.linksContainer}>
                        {!isLogged
                            ?
                            <NavLink to={PATH.LOGIN}>Login</NavLink>
                            :
                            <a onClick={onLogoutClick}>Logout</a>
                        }
                    </div>


                </div>
            </div>
        </div>

    )
}