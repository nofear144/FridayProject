import React, {FormEvent, useEffect, useState} from "react";
import s from './Login.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Navigate, useNavigate} from 'react-router-dom';
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {useDispatch} from "react-redux";
import {LoginTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import SuperCheckbox from "../../../n1-main/n1-ui/common/c3-checkbox/SuperCheckbox";
import Loader from "../m3-reset-password/Loader";
import Window from "../m4-new-password/Window";
import {setAppErrorAC, setStatusAC} from "../../../n1-main/n2-bll/reducers/app-reducer";


export function Login() {
    const navigate = useNavigate();
    const routeToSignUpChange = () => {
        navigate(PATH.REGISTRATION)
    }
    const routeToResetPasswordChange = () => {
        navigate(PATH.RESET_PASSWORD)
    }

    const [mailValue, setMailValue] = useState<string>('')
    const [passwordValue, setPasswordValue] = useState<string>('')
    const [rememberMeValue, setRememberMeValue] = useState<boolean>(false)

    const status = useAppSelector(state => state.app.status)
    const error = useAppSelector(state => state.app.error)
    const isLogged = useAppSelector(state => state.login.isLogged)
    const dispatch = useDispatch()


    const onMailValueChange = (mail:string) => {
        setMailValue(mail)
        dispatch(setAppErrorAC(""))
    }
    const onPasswordValueChange = (password:string) => {
        setPasswordValue(password)
        dispatch(setAppErrorAC(""))
    }
    const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(LoginTC({email: mailValue, password: passwordValue, rememberMe: rememberMeValue}))
        e.preventDefault()
    }

    useEffect(() => {
        if (status === "succeeded") {
            return function cleanup() {
                dispatch(setStatusAC("idle"))
            }
        }
    }, [status])


    if (isLogged) {
        return <Navigate to={PATH.PROFILE}/>
    }
    return (
        <Window>
            { status==="loading"&&<Loader/>}
            <form onSubmit={onLoginSubmit}>
                <div className={s.form}>
                    <div className={s.header}>it-incubator</div>
                    <div className={s.signLabel}>Sign in</div>
                    <SuperInputText
                        type="text"
                        required
                        name="email"
                        onChangeText={onMailValueChange}
                    />
                    <SuperInputText
                        type="password"
                        required
                        name="password"
                        onChangeText={onPasswordValueChange}
                    />

                    <div>
                        <SuperCheckbox
                            name={'Remember me'}
                            onChangeChecked={setRememberMeValue}
                        />
                    </div>
                    <div className={s.forgot}><span onClick={routeToResetPasswordChange}>Forgot Password</span></div>
                    <div className={s.button}>
                        <SuperButton type="submit" name={"Login"} variant={"primary"}/>
                    </div>

                    <div className={s.helpText}> Don't have an account?</div>
                    <div onClick={routeToSignUpChange} className={s.sign}>Sign Up</div>
                    <div>{error}</div>
                </div>
            </form>
        </Window>
    )
}