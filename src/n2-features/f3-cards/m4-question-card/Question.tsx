import React, {FC, memo, useEffect} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import s from "./QuestionCard.module.css";
import {Navigate, useNavigate} from "react-router-dom";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";

type PropsType = {
    setShow: (value: boolean) => void
    onCancelClick:()=>void
}
export const Question: FC<PropsType> = memo(({setShow,onCancelClick}) => {

    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onSetShowClick = () => {
        setShow(false)
    }


    useEffect(() => {

    }, [])


    return (
        <Window>
            <div className={s.container}>
                <h2>Learn</h2>
                <div>Question</div>
                <div className={s.buttons}>
                    <div><SuperButton  onClick={onCancelClick} name={"Cancel"}/></div>
                    <div><SuperButton onClick={onSetShowClick} name={"Show Answer"}/></div>
                </div>
            </div>
        </ Window>
    )
})