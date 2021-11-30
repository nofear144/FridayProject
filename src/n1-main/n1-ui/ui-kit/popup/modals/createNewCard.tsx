import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {createNewCardTC} from "../../../../n2-bll/reducers/cards-reducer";
import SuperInputText from "../../../common/c2-input/SuperInputText";
import style from "../popup.module.css";
import SuperButton from "../../../common/c1-button/SuperButton";
import {useParams} from "react-router-dom";
import s from "../popup.module.css";

export type CreateCardPropsType = {
    onClose: (value: boolean) => void
}
export const CreateNewCard: FC<CreateCardPropsType> = ({onClose}) => {
    const dispatch = useDispatch()
    const {id} = useParams<string>()


    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')

    const createCard = (e: FormEvent<HTMLFormElement>) => {
        id && dispatch(createNewCardTC(id, question, answer, 5, 4))
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
        <form className={s.container} onSubmit={createCard}>
            <h2>Create the card</h2>
            <SuperInputText
                onChangeText={onChangeQuestion}
                value={question}
                required name="Question"/>
            <SuperInputText
                onChangeText={onChangeAnswer}
                value={answer}
                required name="Answer"/>
            <div className={style.buttons}>
                <SuperButton variant="secondary" name="Close" onClick={() => onClose?.(false)}/>
                <SuperButton style={{backgroundColor: "dodgerblue"}} name="Accept"/>
            </div>
        </form>
    )
}