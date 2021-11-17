import React, {memo} from "react";
import s from "./CheckEmail.module.css"
import {EmailIcon} from "./EmailIcon";
import {useParams} from "react-router-dom";
import Window from "../m4-new-password/Window";


export const CheckEmail = memo(() => {

    const {email} = useParams<string>()
    return (
        <Window>
            <div className={s.container}>
                <span className={s.title}>it-cards</span>
                <EmailIcon/>
                <h1 className={s.subTitle}>Check Email</h1>
                <span className={s.description}>We’ve sent an Email with instructions to {email}</span>
            </div>
        </Window>
    )
})