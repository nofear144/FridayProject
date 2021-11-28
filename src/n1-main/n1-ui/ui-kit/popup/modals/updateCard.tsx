import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {updateCardTC} from "../../../../n2-bll/reducers/cards-reducer";
import SuperInputText from "../../../common/c2-input/SuperInputText";
import style from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {useAppSelector} from "../../../../n2-bll/store/store";
import {useParams} from "react-router-dom";

export type UpdateCardPropsType = {
    onClose: (value: boolean) => void
    cardId: string
}
export const UpdateCard: FC<UpdateCardPropsType> = ({cardId, onClose}) => {
    const dispatch = useDispatch()
    const allCards = useAppSelector(state => state.cards.cards)
    const {id} = useParams<string>()

    const currentQuestion = allCards.find(card => card._id === cardId && card.question)
    const currentAnswer = allCards.find(card => card._id === cardId && card.answer)

    const [answer, setAnswer] = useState(currentAnswer!.answer)
    const [question, setQuestion] = useState(currentQuestion!.question)

    const updateCard = (e: FormEvent<HTMLFormElement>) => {
        dispatch(id && updateCardTC(id, cardId, question, answer))
        onClose(false)
        e.preventDefault()
    }

    const onChangeQuestion = (question: string) => {
        setQuestion(question)
    }
    const onChangeAnswer = (answer: string) => {
        setAnswer(answer)
    }
    return (
        <form onSubmit={updateCard}>
            <SuperInputText
                onChangeText={onChangeQuestion}
                value={question}
                required name="Question"/>
            <SuperInputText
                onChangeText={onChangeAnswer}
                value={answer}
                required name="Answer"/>
            <div className={style.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose(false)}/>
                <SuperButton style={{backgroundColor: "dodgerblue"}} name="Accept"/>
            </div>
        </form>
    )
}