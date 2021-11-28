import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../../n2-bll/store/store";
import {createNewCardTC, updateCardTC} from "../../../n2-bll/reducers/cards-reducer";
import ReactDOM from "react-dom";
import style from "./popup.module.css";
import SuperInputText from "../../common/c2-input/SuperInputText";
import SuperButton from "../../common/c1-button/SuperButton";

export type PortalModelType = {
    message: string
    isOpen: boolean
}
export type CreateCardPropsType = {
    onClose: (value: boolean) => void
}
export type UpdateCardPropsType = {
    onClose: (value: boolean) => void
    cardId:string
}
export const Popup: FC<PortalModelType> = (
    {message, isOpen, children}) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation()
    }

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={style.mainModal} onClick={stopPropagation}>
            <h2>{message}</h2>
            {children}
        </div>,
        document.body
    );
};

export const CreateNewCard: FC<CreateCardPropsType> = ({onClose}) => {
    const dispatch = useDispatch()
    const cardsPack_id = useAppSelector(state => state.cards.cardsPack_id)

    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')

    const createCard = (e: FormEvent<HTMLFormElement>) => {
        dispatch(createNewCardTC(cardsPack_id, question, answer, 5, 4))
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
        <form onSubmit={createCard}>
            <SuperInputText
                onChangeText={onChangeQuestion}
                value={question}
                required name="Question"/>
            <SuperInputText
                onChangeText={onChangeAnswer}
                value={answer}
                required name="Answer"/>
            <div className={style.buttons}>
                <SuperButton style={{backgroundColor: "darkRed"}} name="Close" onClick={() => onClose?.(false)}/>
                <SuperButton variant="secondary" name="Accept"/>
            </div>
        </form>
    )

}


export const UpdateCard: FC<UpdateCardPropsType> = ({cardId, onClose}) => {
    const dispatch = useDispatch()

    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')

    const updateCard = (e: FormEvent<HTMLFormElement>) => {
        dispatch(updateCardTC(cardId, question, answer))
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
                <SuperButton style={{backgroundColor: "darkRed"}} name="Close" onClick={() => onClose(false)}/>
                <SuperButton variant="secondary" name="Accept"/>
            </div>
        </form>
    )

}