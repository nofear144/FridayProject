import React, {MouseEvent, useEffect, useState} from "react";
import s from "./NewPassword.module.css";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {sendNewPasswordWithToken} from "../../../n1-main/n2-bll/reducers/newPass-reducer";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {setRecoveryStatus} from "../../../n1-main/n2-bll/reducers/resetPass-reducer";
import {useDispatch} from "react-redux";


export function NewPassword() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const error = useAppSelector(state => state.newPass.error);
    const status = useAppSelector(state => state.newPass.status);
    const [newPassword, setNewPassword] = useState('');
    const {token} = useParams();
    const handleOnChange = (password: string) => {
        setNewPassword(password);
    }
    const handleOnClick = () => {
        const payload = {password: newPassword, resetPasswordToken: token || ''}
        dispatch(sendNewPasswordWithToken(payload))
    }
    useEffect(() => {
        if (status === "success") {
            navigate(PATH.LOGIN)
        }
        return function cleanup () {
            dispatch(setRecoveryStatus("idle"))
        }
    })


    return (
        <form className={s.form}>
            <div className={s.container}>
                <span className={s.title}>it-cards</span>
                <h1 className={s.subTitle}>Create new password</h1>
                <SuperInputText onChangeText={handleOnChange} type="text" required name="Password"/>
                <span className={s.description}>Create new password and we will send you further instructions to email</span>
                <SuperButton name="Create new password"/>
                {error ? <span>{error}</span> : <span>{"*"}</span>}
            </div>
        </form>
    )
}