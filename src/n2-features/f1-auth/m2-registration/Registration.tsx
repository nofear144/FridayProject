import React, {useEffect, useState} from "react";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import style from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {sendFormTC, setErrorAC, setRegisterAC} from "../../../n1-main/n2-bll/reducers/registration-reducer";
import {rootReducerType} from "../../../n1-main/n2-bll/store/store";
import {Navigate} from "react-router-dom";


export const Registration = React.memo(() => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCopy, setPasswordCopy] = useState("")

    const dispatch = useDispatch();
    const status = useSelector<rootReducerType, string>((state) => state.registrationPass.status)
    const error = useSelector<rootReducerType, string | null>((state) => state.registrationPass.error)
    const isRegister = useSelector<rootReducerType, boolean>((state) => state.registrationPass.isRegister)

    const sendFrom = (email: string, password: string) => {
        if (password === passwordCopy) {
            dispatch(sendFormTC(email, password))
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
    useEffect(() => {
        return () => {
            dispatch(setRegisterAC(false))
        }
    }, [dispatch])

    if (isRegister) {
        return <Navigate to="/login"/>
    }

    return (
        <div className={style.registration}>
            <div className={style.header}>
                <h1>It-incubator</h1>
                <h2>Sign Up</h2>
            </div>
            <div className={style.emptyDiv}>
                {(status === 'loading' && <span className={style.span}>LOADING...</span>)
                || (status === 'failed' ? <span className={style.error}>{error}</span> :
                    <span className={style.span}> </span>)}
            </div>
            <div className={style.inputs}>
                <SuperInputText onChangeText={setEmail} value={email} required name="Email"/>
                <SuperInputText onChangeText={setPassword} value={password} required name="Password"/>
                <SuperInputText onChangeText={setPasswordCopy} value={passwordCopy} required name="Confirm password"/>
            </div>
            <div className={style.buttons}>
                <SuperButton style={{backgroundColor: "pink", color: "black"}} name="Cancel" onClick={onClickCancel}/>
                <SuperButton disabled={status === 'loading'} name="Register" onClick={() => sendFrom(email, password)}/>
            </div>
        </div>
    )
})