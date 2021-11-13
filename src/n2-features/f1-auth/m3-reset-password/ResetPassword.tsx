import React from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import s from "./ResetPassword.module.css"
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {NavLink} from "react-router-dom";


export function ResetPassword() {
    return (
        <form className={s.form}>
            <div className={s.container}>
                <span className={s.Title}>it-cards</span>
                <h1 className={s.subTitle}>Forgot your password?</h1>
                <SuperInputText type="text" required name="Email"/>
                <span >Enter your email address and we will send you further instructions </span>
                <SuperButton  children={"Send Instructions"}/>
                <span>Did you remember your password?</span>
                <NavLink children="Try logging in" to="/login"/>
            </div>
        </form>
    )
}