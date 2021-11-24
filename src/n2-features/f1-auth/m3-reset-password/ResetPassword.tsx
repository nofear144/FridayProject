import React, {FormEvent, memo, useEffect, useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import s from "./ResetPassword.module.css"
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {recoveryMessageType} from "../../../n1-main/n3-dal/api-password-recovery";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import Loader from "./Loader";
import Window from "../m4-new-password/Window";
import {setAppErrorAC, setStatusAC} from "../../../n1-main/n2-bll/reducers/app-reducer";
import {sendRecoveryInstructions} from "../../../n1-main/n2-bll/reducers/login-reducer";


export const ResetPassword = memo(() => {
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('');


    const handleOnChangeText = (email: string) => {
        setEmail(email)
        dispatch(setAppErrorAC(''))
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        let message: recoveryMessageType = {
            email: email,
            from: "arsbazel@gmail.com",
            message: `<div style=" width: 400px; text-align: center;
                      border-radius: 8px;
                      background-image: linear-gradient(125deg, #6a89cc, #b8e994);
                      padding: 50px">
                      <a href='https://nofear144.github.io/FridayProject/#/set-new-password/$token$'
                    style="color: #f8faff; font-size: 25px; padding: 15px; text-decoration: none">
                    <div style="border-radius: 5px; background-color: #4e5fff">
                    Go to create new password</div></a></div>`
        }
        dispatch(sendRecoveryInstructions(message))
        e.preventDefault()
    }

    useEffect(() => {
        if (status === "succeeded") {
            navigate(`${PATH.CHECK_EMAIL}/${email}`)
            return function cleanup() {
                dispatch(setStatusAC("idle"))
            }
        }
    }, [status])


    return (
        <Window>
            {status === "loading" && <Loader/>}
            <form className={s.container} onSubmit={handleOnSubmit}>
                <span className={s.title}>it-cards</span>
                <h1 className={s.subTitle}>Forgot your password?</h1>
                <SuperInputText onChangeText={handleOnChangeText} type="text" required name="Email"/>
                <span>Enter your email address and we will send you further instructions </span>
                <SuperButton name="Send Instructions" type="submit"/>
                <span>Did you remember your password?</span>
                <NavLink children="Try logging in" to="/login"/>
                {error ? <span>{error}</span> : <span > </span>}
            </form>
        </ Window>
    )
})