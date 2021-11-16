import React, {memo} from "react";
import s from "./CheckEmail.module.css"
import {EmailIcon} from "./EmailIcon";


export const CheckEmail = memo(() => {
    const email = "example@mail.com"
    return (


        <form className={s.form}>
            <div className={s.container}>
                <span className={s.Title}>it-cards</span>
                <EmailIcon/>
                <h1 className={s.subTitle}>Check Email</h1>
                <span className={s.description}>We’ve sent an Email with instructions to {email}</span>
            </div>
        </form>
    )
})