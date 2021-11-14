import React, {MouseEvent, useEffect, useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import s from "./ResetPassword.module.css"
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {sendRecoveryInstructions, setRecoveryStatus} from "../../../n1-main/n2-bll/reducers/resetPass-reducer";
import {recoveryMessageType} from "../../../n1-main/n3-dal/api-newPassword";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";


export function ResetPassword() {
    const error = useAppSelector(state => state.newPass.error);
    const status = useAppSelector(state => state.newPass.status);
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const handleOnChangeText = (email: string) => {
        setEmail(email)
    }

    const handleOnClick = () => {
        let message: recoveryMessageType = {
            email: email,
            from: "arsbazel@gmail.com",
            message: `<div style="background-color: #1e541e; padding: 40px">
                    password recovery link:
                    <a href='http://localhost:3000/#/set-new-password/$token$'>
                    link</a></div>`
        }
        dispatch(sendRecoveryInstructions(message))
    }

    useEffect(() => {
        if (status === "success") {
            navigate(PATH.CHECK_EMAIL)
        }
        return function cleanup () {
            dispatch(setRecoveryStatus("idle"))
        }
    })


    return (
        <form className={s.form}>
            <div className={s.container}>1
                <span className={s.title}>it-cards</span>
                <h1 className={s.subTitle}>Forgot your password?</h1>
                <SuperInputText onChangeText={handleOnChangeText} type="text" required name="Email"/>
                <span>Enter your email address and we will send you further instructions </span>
                <SuperButton name="Send Instructions" onClick={handleOnClick}/>
                <span>Did you remember your password?</span>
                <NavLink children="Try logging in" to="/login"/>
                {error ? <span>{error}</span> : <span>{"*"}</span>}
            </div>
        </form>
    )
}