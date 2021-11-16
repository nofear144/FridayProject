import React, {FormEvent, useState} from "react";
import s from './Login.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Navigate, useNavigate} from 'react-router-dom';
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {LoginTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
import {rootReducerType} from "../../../n1-main/n2-bll/store/store";
import SuperCheckbox from "../../../n1-main/n1-ui/common/c3-checkbox/SuperCheckbox";


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

    const error = useSelector<rootReducerType, string>(state => state.login.error)
    const isLogged = useSelector<rootReducerType, boolean>(state => state.login.isLogged)
    const dispatch = useDispatch()

    const onLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        dispatch(LoginTC({email: mailValue, password: passwordValue, rememberMe: rememberMeValue}))
        e.preventDefault()
    }


    if (isLogged) {
        return <Navigate to={PATH.PROFILE}/>
    }
    return (
        <div>
            <form onSubmit={onLoginSubmit}>
                <div className={s.form}>
                    <div className={s.header}>it-incubator</div>
                    <div className={s.signLabel}>Sign in</div>
                    <SuperInputText
                        type="text"
                        required
                        name="email"
                        onChangeText={setMailValue}
                    />
                    <SuperInputText
                        type="password"
                        required
                        name="password"
                        onChangeText={setPasswordValue}
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
        </div>
    )
}