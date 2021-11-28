import React, {ChangeEvent, FC, memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import s from "./QuestionCard.module.css";
import {useNavigate, useParams} from "react-router-dom";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {getAllCardsTC, gradeCardTC} from "../../../n1-main/n2-bll/reducers/cards-reducer";
import {CardsType} from "../../../n1-main/n3-dal/cards-api";

type PropsType = {
    onCancelClick: () => void
}
export const Answer: FC<PropsType> = memo(({onCancelClick}) => {

    const cards = useAppSelector(state => state.cards.cards)
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {id} = useParams()

    const [grade, setGrade] = useState(1)

    const onGradeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setGrade(+e.target.value)
    }

    const getCard = (cards: CardsType[]) => {
        const sum = cards.reduce((acc, card) => acc + (6 - card.grade) ** 2, 0);
        const rand = Math.random() * sum;
        const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
                const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
                return {sum: newSum, id: newSum < rand ? i : acc.id}
            }
            , {sum: 0, id: -1});
        return cards[res.id + 1];
    }
    const [card, setCard] = useState<CardsType>({
        _id: '',
        cardsPack_id: '',
        user_id: "",
        answer: '',
        question: '',
        grade: 0,
        shots: 0,
        created: '',
        updated: '',
    })

    useEffect(() => {
        dispatch(getAllCardsTC())
        if (cards.length > 0) setCard(getCard(cards));
        return () => {}
    }, [dispatch, id, cards])
    const onNextClick = () => {
        if (cards.length > 0) {
            setCard(getCard(cards));
        } else {

        }
        dispatch(gradeCardTC(grade,card._id))
    }

    return (
        <Window>
            <div className={s.container}>
                <h2>Learn</h2>
                <div>Question</div>
                <div>Answer</div>
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
        </ Window>
    )
})