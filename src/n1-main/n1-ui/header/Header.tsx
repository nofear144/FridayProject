import {LinkProps, NavLink, useMatch, useResolvedPath} from "react-router-dom";
import {PATH} from "../routes/Routes";
import s from "./Header.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../../n2-bll/store/store";
import {LogoutTC} from "../../n2-bll/reducers/login-reducer";
import React, {FC} from "react";


export function Header() {
    const dispatch = useDispatch()

    const isLogged = useSelector<rootReducerType, boolean>(state => state.login.isLogged)

    const onLogoutClick = () => {
        dispatch(LogoutTC())
    }

    return (
        <div className={s.header}>
            <div className={s.container}>
                <h2 className={s.logo}>FunCards</h2>
                <div>
                    <CustomLink to={PATH.PROFILE}>Profile</CustomLink>
                    <CustomLink to={PATH.PACKS_LIST}>PackList</CustomLink>
                </div>
                <div>
                    {!isLogged
                        ?
                        <NavLink to={PATH.LOGIN}>Login</NavLink>
                        :
                        <a onClick={onLogoutClick}>Logout</a>
                    }
                </div>


            </div>
        </div>
    )
}

type CustomLinkProps = {
    to: string
}

export const CustomLink: FC<CustomLinkProps> = ({children, to, ...props}: LinkProps) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({path: resolved.pathname, end: true});

    return (

        <NavLink
            className={match ? s.current : ""}
            to={to}
            {...props}
        >
            {children}
        </NavLink>
    );
}