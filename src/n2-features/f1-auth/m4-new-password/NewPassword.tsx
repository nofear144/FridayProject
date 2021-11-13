import React, {MouseEvent, useState} from "react";
import s from "./NewPassword.module.css";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";


export function NewPassword() {


    return (
        <form className={s.form}>
            <div className={s.container}>
                <span className={s.Title}>it-cards</span>
                <h1 className={s.subTitle}>Create new password</h1>
                <SuperInputText type="text" required name="Email"/>
                <span className={s.description}>Create new password and we will send you further instructions to email</span>
                <SuperButton />
            </div>
        </form>
    )
}