import React, {ChangeEvent, memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import s from "./QuestionCard.module.css";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {Question} from "./Question";
import {Answer} from "./Answer";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {CardsType} from "../../../n1-main/n3-dal/cards-api";
import {
    deleteAllCardsAC,
    getAllCardsTC,
    setAllCardsAC,
    setCardsPack_idAC
} from "../../../n1-main/n2-bll/reducers/cards-reducer";


export const QuestionCard = memo(() => {
    const cardsPackId = useAppSelector(state => state.cards.cardsPack_id)
    const cards = useAppSelector(state => state.cards.cards)
    console.log(cards)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [show, setShow] = useState(true)
    const [grade, setGrade] = useState(1)
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
    console.log(card)
    const {id} = useParams()
    const onCancelClick = () => {
        navigate(PATH.PACKS_LIST)
    }
    const onSetShowClick = () => {
        setShow(false)
    }
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
        console.log(cards[res.id + 1])
        return cards[res.id + 1];

    }
    const onNextClick = () => {
        if (cards.length > 0) {
            setCard(getCard(cards));
        } else {
        }
    }



    useEffect(() => {
        if (cards.length === 0) {
            id && dispatch(setCardsPack_idAC(id))
            dispatch(getAllCardsTC())
        }

        if (cards.length > 0) setCard(getCard(cards));
        return () => {
         dispatch(deleteAllCardsAC())
        }
    }, [card])

    return (<div>
        {show ?
            <Window>
                <div className={s.container}>
                    <Question
                        card={card}
                        onSetShowClick={onSetShowClick}
                        onCancelClick={onCancelClick}
                    />
                </div>
            </ Window>
            :
            <Window>
                <div className={s.container}>
                    <Answer
                        card={card}
                        onNextClick={onNextClick}
                        grade={grade}
                        onCancelClick={onCancelClick}
                        onGradeChange={onGradeChange}/>
                </div>
            </ Window>
        }
    </div>)

})