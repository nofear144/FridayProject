import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import s from "../../f1-auth/m3-reset-password/ResetPassword.module.css";
import {deleteCardTC, getAllCardsTC} from "../../../n1-main/n2-bll/reducers/cards-reducer";


export const CardsList = memo(() => {
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);

    const cards = useAppSelector(state => state.cards.cards)
    const cardAnswer = useAppSelector(state => state.cards.cards.map(el => el.answer));
    const cardQuestion = useAppSelector(state => state.cards.cards.map(el => el.question));

    const page = useAppSelector(state => state.cards.page);
    const min = useAppSelector(state => state.cards.min);
    const max = useAppSelector(state => state.cards.max);
    const pageCount = useAppSelector(state => state.cards.pageCount);
    const sortCards = useAppSelector(state => state.cards.sortCards);

    const cardsPack_id = useAppSelector(state => state.cards.cardsPack_id)

    const dispatch = useDispatch()

    const deleteCard = (id:string)=>{
        console.log(id)
        dispatch(deleteCardTC(id))
    }
    // useEffect(() => {
    //     dispatch(getAllCardsTC(cardAnswer, cardQuestion, grade, currentPage))
    // }, [dispatch, cardAnswer, cardQuestion, grade, currentPage])

    useEffect(() => {
        dispatch(getAllCardsTC())
    }, [sortCards,page,max,min,cardsPack_id,pageCount])

    return (
        <Window>
            {status === "loading" && <Loader/>}
            <form className={s.container}>
                HELLO I'M CARDS LIST
                {cards.map((el) => {
                    return <div key={el._id}>
                        <div>Question: {el.question}</div>
                        <div>Answer: {el.answer}</div>
                        <div>Created: {el.created}</div>
                        <div>Grade: {el.grade}</div>
                        <div>Grade: {el.updated}</div>
                        <button onClick={()=>deleteCard(el._id)}>delete</button>
                        <br/>
                    </div>

                })}
                {/*{cards.map(el => <div>{el.answer}</div>)}*/}
                {/*{cards.map(el => <div>{el.question}</div>)}*/}
                {/*{cards.map(el => <div>{el.created}</div>)}*/}
                {/*{cards.map(el => <div>{el.grade}</div>)}*/}
            </form>
        </ Window>
    )
})