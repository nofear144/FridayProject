import React, {ChangeEvent, FC, memo} from "react";
import Window from "../../f1-auth/m4-new-password/Window";
import s from "./QuestionCard.module.css";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {CardsType} from "../../../n1-main/n3-dal/cards-api";

type PropsType = {
    card:CardsType
    onCancelClick: () => void
    grade:number
    onGradeChange:(e: ChangeEvent<HTMLInputElement>)=>void
    onNextClick:()=>void
}
export const Answer: FC<PropsType> = memo(({onCancelClick,grade,onGradeChange,onNextClick,card}) => {

    return (
            <div className={s.container}>
                <h2>Learn</h2>
                <div>Question: {card.question}</div>
                <div>Answer: {card.answer}</div>
                <div>Rate yourself</div>
                <div className={s.radioButtons}>
                    <input type={"radio"} value={1} checked={grade === 1 ? true : false} onChange={onGradeChange}/>
                    <div>Did not know</div>
                    <input type={"radio"} value={2} checked={grade === 2 ? true : false} onChange={onGradeChange}/>
                    <div>Forgot</div>
                    <input type={"radio"} value={3} checked={grade === 3 ? true : false} onChange={onGradeChange}/>
                    <div>A lot of thought</div>
                    <input type={"radio"} value={4} checked={grade === 4 ? true : false} onChange={onGradeChange}/>
                    <div>Confused</div>
                    <input type={"radio"} value={5} checked={grade === 5 ? true : false} onChange={onGradeChange}/>
                    <div>Knew the answer</div>
                </div>

                <div className={s.buttons}>
                    <div><SuperButton onClick={onCancelClick} name={"Cancel"}/></div>
                    <div><SuperButton onClick={onNextClick} name={"Next"}/></div>
                </div>
            </div>
    )
})