import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import s from "./QuestionCard.module.css";
import {Navigate, useNavigate} from "react-router-dom";
import {Question} from "./Question";
import {Answer} from "./Answer";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";



export const QuestionCard = memo(() => {


    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [show, setShow] = useState(true)

    const onCancelClick = () => {
        navigate(PATH.PACKS_LIST)
    }
    useEffect(() => {

    }, [])


    return (<div>
        {show ?
            <Window>
                <div className={s.container}>
                    <Question setShow={setShow}
                              onCancelClick={onCancelClick}
                    />
                </div>
            </ Window>
            :
            <Window>
                <div className={s.container}>
                    <Answer onCancelClick={onCancelClick}/>
                </div>
            </ Window>
        }
    </div>)

})