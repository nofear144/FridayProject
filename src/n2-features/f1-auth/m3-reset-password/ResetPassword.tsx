import React, {FormEvent, memo, MouseEvent, useEffect, useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import s from "./ResetPassword.module.css"
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {sendRecoveryInstructions, setRecoveryStatus} from "../../../n1-main/n2-bll/reducers/resetPass-reducer";
import {recoveryMessageType} from "../../../n1-main/n3-dal/api-newPassword";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";


export const ResetPassword = memo(() => {
    const error = useAppSelector(state => state.resetPass.error);
    const status = useAppSelector(state => state.resetPass.status);
    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');
    const handleOnChangeText = (email: string) => {
        setEmail(email)
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        let message: recoveryMessageType = {
            email: email,
            from: "arsbazel@gmail.com",
            message: `<div style="background-color: #1e541e; padding: 40px">
                    password recovery link:
                    <a href='https://nofear144.github.io/FridayProject/#/set-new-password/$token$'>
                    Go to create new password</a></div>`
        }
        dispatch(sendRecoveryInstructions(message))
        e.preventDefault()
    }

    useEffect(() => {
        console.log(status)
        if (status === "success") {
            navigate(PATH.CHECK_EMAIL)
        }
        return function cleanup () {
            dispatch(setRecoveryStatus("idle"))
        }
    }, [status])


    return (
        <form className={s.form} onSubmit={handleOnSubmit}>
            <div className={s.container}>1
                <span className={s.title}>it-cards</span>
                <h1 className={s.subTitle}>Forgot your password?</h1>
                <SuperInputText onChangeText={handleOnChangeText} type="text" required name="Email"/>
                <span>Enter your email address and we will send you further instructions </span>
                <SuperButton name="Send Instructions" type="submit" />
                <span>Did you remember your password?</span>
                <NavLink children="Try logging in" to="/login"/>
                {error ? <span>{error}</span> : <span>{"*"}</span>}
            </div>
        </form>
    )
})