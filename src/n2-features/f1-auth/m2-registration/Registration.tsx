import React, {FormEvent, useEffect, useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import style from "./Registration.module.css"
import {useDispatch} from "react-redux";
import {sendFormTC, setErrorAC, setRegisterAC} from "../../../n1-main/n2-bll/reducers/registration-reducer";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {Navigate} from "react-router-dom";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import Loader from "../m3-reset-password/Loader";
import Window from "../m4-new-password/Window";


export const Registration = React.memo(() => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCopy, setPasswordCopy] = useState("")

    const dispatch = useDispatch();
    const status = useAppSelector(state => state.registrationPass.status)
    const error = useAppSelector(state => state.registrationPass.error)
    const isRegister = useAppSelector(state => state.registrationPass.isRegister)

    useEffect(() => {
        return () => {
            dispatch(setRegisterAC(false))
        }
    }, [dispatch])

    const sendFrom = (e: FormEvent<HTMLFormElement>) => {
        if (password === passwordCopy) {
            dispatch(sendFormTC({email: email, password: password}))
            e.preventDefault()
        }

        if (password !== passwordCopy) {
            dispatch(setErrorAC("Passwords are not the same"))
        }

        if (password.length < 7) {
            dispatch(setErrorAC("Password must be more than 7 characters..."))
        }
    }

    const onClickCancel = () => {
        setEmail("")
        setPassword("")
        setPasswordCopy("")
    }

    if (isRegister) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Window>
            {(status === 'loading' && <Loader/>)}
            <form onSubmit={sendFrom}>
                <div className={style.registration}>
                    <h1>It-incubator</h1>
                    <h2>Sign Up</h2>
                    <div className={style.emptyDiv}>
                        {(status === 'failed' ? <span className={style.error}>{error}</span> :
                            <span className={style.span}> </span>)}
                    </div>
                    {/*<div className={style.inputs}>*/}
                    <SuperInputText
                        onChangeText={setEmail}
                        value={email}
                        required name="Email"/>
                    <SuperInputText
                        onChangeText={setPassword}
                        value={password}
                        required name="Password"/>
                    <SuperInputText
                        onChangeText={setPasswordCopy}
                        value={passwordCopy}
                        required name="Confirm password"/>
                    <div className={style.buttons}>
                        <SuperButton
                            style={{backgroundColor: "pink", color: "black"}}
                            name="Cancel"
                            onClick={onClickCancel}
                        />
                        <SuperButton
                            disabled={status === 'loading'}
                            name="Register"
                            type="submit"
                        />
                    </div>
                </div>
            </form>
        </Window>
    )
})
