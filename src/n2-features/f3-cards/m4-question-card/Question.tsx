import React, {FC, memo} from "react";
import Window from "../../f1-auth/m4-new-password/Window";
import s from "./QuestionCard.module.css";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {CardsType} from "../../../n1-main/n3-dal/cards-api";

type PropsType = {
    card:CardsType
    onSetShowClick: () => void
    onCancelClick:()=>void
}
export const Question: FC<PropsType> = memo(({onSetShowClick,onCancelClick,card}) => {

    return (
            <div className={s.container}>
                <h2>Learn</h2>
                <div>Question:{card.question}</div>
                <div className={s.buttons}>
                    <div><SuperButton  onClick={onCancelClick} name={"Cancel"}/></div>
                    <div><SuperButton onClick={onSetShowClick} name={"Show Answer"}/></div>
                </div>
            </div>
    )
})