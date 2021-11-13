import React, {useState} from "react";
import s from './Login.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {useNavigate} from 'react-router-dom';
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";



export function Login() {
    const navigate = useNavigate();
    const routeToSignUpChange = () => {
        navigate(PATH.REGISTRATION)
    }
    const routeToResetPasswordChange = () => {
        navigate(PATH.RESET_PASSWORD)
    }

    const [mailValue, setMailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    console.log(mailValue)
    console.log(passwordValue)

    return (
        <div>
            <form>
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

                    <div  className={s.forgot}><span onClick={routeToResetPasswordChange}>Forgot Password</span></div>
                    <div className={s.button}>
                        <SuperButton  />
                    </div>
                    <div className={s.helpText}> Don't have an account?</div>
                    <div onClick={routeToSignUpChange} className={s.sign}>Sign Up</div>
                </div>
            </form>
        </div>
    )
}