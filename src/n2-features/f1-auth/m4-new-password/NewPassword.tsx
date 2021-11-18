import React, {FormEvent, memo, useEffect, useState} from "react";
import s from "./NewPassword.module.css";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {useDispatch} from "react-redux";
import Loader from "../m3-reset-password/Loader";
import Window from "./Window";
import {setAppErrorAC, setStatusAC} from "../../../n1-main/n2-bll/reducers/app-reducer";
import {sendNewPasswordWithToken} from "../../../n1-main/n2-bll/reducers/login-reducer";


export const NewPassword = memo(() => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);
    const [newPassword, setNewPassword] = useState('');
    const {token} = useParams<string>();


    const handleOnChange = (password: string) => {
        setNewPassword(password);
        dispatch(setAppErrorAC(''))
    }
    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        const payload = {password: newPassword, resetPasswordToken: token || ''}
        dispatch(sendNewPasswordWithToken(payload))
        e.preventDefault()
    }

    useEffect(() => {
        if (status === "succeeded") {
            navigate(PATH.LOGIN)
            return function cleanup() {
                dispatch(setStatusAC("idle"))
            }
        }
    }, [status])

    return (
        <Window>
            {status === "loading" && <Loader/>}
            <form onSubmit={handleOnSubmit} className={s.container}>
                <span className={s.title}>it-cards</span>
                <h1 className={s.subTitle}>Create new password</h1>
                <SuperInputText onChangeText={handleOnChange} type="text" required name="Password"/>
                <span
                    className={s.description}>Create new password and we will send you further instructions to email</span>
                <SuperButton type="submit" name="Create new password"/>
                {error ? <span>{error}</span> : <span > </span>}
            </form>
        </Window>
    )
})