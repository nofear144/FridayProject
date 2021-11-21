import React, { memo, useEffect} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import s from "../../f1-auth/m3-reset-password/ResetPassword.module.css";
import {useNavigate} from "react-router-dom";


export const CardInfo = memo(() => {
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
    }, [])


    return (
        <Window>
            {status === "loading" && <Loader/>}
            <div className={s.container} >

            </div>
        </ Window>
    )
})