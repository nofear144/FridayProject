import React from "react";
import s from "./NotFound404.module.css"
import {NavLink} from "react-router-dom";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";



export function NotFound404() {
    return (
        <div className={s.body}>
            <div className={s.container}>
                <h2>Oops! Page not found.</h2>
                <h1 className={s.number}>404</h1>
                <p>We can't find the page you're looking for</p>
                <NavLink className={s.link} to={PATH.PROFILE}>Go back home</NavLink>
            </div>
        </div>
    )
}