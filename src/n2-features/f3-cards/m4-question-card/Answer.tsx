import React, {ChangeEvent, FC, memo} from "react";
import s from "./QuestionCard.module.css";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {CardsType} from "../../../n1-main/n3-dal/cards-api";

type PropsType = {
    card: CardsType
    onCancelClick: () => void
    grade: number
    onGradeChange: (e: ChangeEvent<HTMLInputElement>) => void
    onNextClick: () => void
}
export const Answer: FC<PropsType> = memo(({onCancelClick, grade, onGradeChange, onNextClick, card}) => {

    return (
        <div className={s.container}>
            <h2>Learn</h2>
            <div className={s.question}>Question: {card.question}</div>
            <div>Answer: {card.answer}</div>
            <div className={s.radioBox}>
                <div className={s.rate}>Rate yourself:</div>
                <div className={s.radioButtons}>
                    <label>
                        <input type={"radio"} value={1} checked={grade === 1 ? true : false} onChange={onGradeChange}/>
                        Did not know</label>
                    <label>
                        <input type={"radio"} value={2} checked={grade === 2 ? true : false} onChange={onGradeChange}/>
                        Forgot</label>
                    <label>
                        <input type={"radio"} value={3} checked={grade === 3 ? true : false} onChange={onGradeChange}/>
                        A lot of thought</label>
                    <label>
                        <input type={"radio"} value={4} checked={grade === 4 ? true : false} onChange={onGradeChange}/>
                        Confused</label>
                    <label>
                        <input type={"radio"} value={5} checked={grade === 5 ? true : false} onChange={onGradeChange}/>
                        Knew the answer</label>
                </div>
            </div>
            <div className={s.buttons}>
                <div><SuperButton onClick={onCancelClick} name={"Cancel"}/></div>
                <div><SuperButton onClick={onNextClick} name={"Next"}/></div>
            </div>
        </div>
    )
})