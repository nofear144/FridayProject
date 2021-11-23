import React, {ChangeEvent, memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import s from "../../f1-auth/m3-reset-password/ResetPassword.module.css";
import {
    createNewCardTC,
    deleteCardTC,
    getAllCardsTC,
    setSortCardsAC,
    updateCardTC
} from "../../../n1-main/n2-bll/reducers/cards-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Spinner} from "../../../n1-main/n1-ui/common/c5-spinner/Spinner";
import {Navigate} from "react-router-dom";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {initializeTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
//import {Paginator} from "../../../n1-main/n1-ui/common/pagination/pagination";


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
    const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount);
    const sortCards = useAppSelector(state => state.cards.sortCards);

    const cardsPack_id = useAppSelector(state => state.cards.cardsPack_id)
    const isInitialize = useAppSelector(state => state.app.isInitialize);
    const isLoggedIn = useAppSelector(state => state.login.isLogged);
const[currentPage,setCurrentPage]=useState(1)
    const dispatch = useDispatch()

    const onPageChanged=(page:number)=>{
        setCurrentPage(page)
    }

    const deleteCard = (id: string) => {
        dispatch(deleteCardTC(id))
    }
    const updateCard = (id: string) => {
        dispatch(updateCardTC(id, "CHANGED QUESTION", "CHANGED ANSWER"))
    }
    const createCard = () => {
        dispatch(createNewCardTC(cardsPack_id,"How are you?", "I'm fine", 5,4))
    }

    const header = {
        answer: "Answer",
        question: "Question",
        grade: "Grade",
        updated: "Updated",
        buttons: "Actions"
    }

    // const sortCard = () => {
    //     sortCards==="0updated"
    //         ? dispatch(setSortCardsAC("1updated"))
    //         :dispatch(setSortCardsAC("0updated"))
    // }
    const sortCard = (param: string) => {
        sortCards[0]==="1"
            ? dispatch(setSortCardsAC(`0${param}`))
            :dispatch(setSortCardsAC(`1${param}`))
    }
    useEffect(() => {
        dispatch(getAllCardsTC())
    }, [sortCards, page, max, min, cardsPack_id, pageCount])

    useEffect(() => {
        if(!isInitialize){
            dispatch(initializeTC())
        }
    }, [])

    if (!isInitialize) {
        return <div className={s.loader}> <Spinner/> </div>
    }

    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Window>
            {status === "loading" && <Loader/>}
            <div>
                <SuperButton name="Create card" onClick={createCard}/>

                <Table
                    onDeleteClickHandler={deleteCard}
                    onUpdateUpdateHandler={updateCard}
                    onSortClickHandler={sortCard}
                    header={header}
                    items={cards}/>
                {/*<Paginator*/}
                {/*    currentPage={currentPage}*/}
                {/*pageSize={page}*/}
                {/*totalItemsCount={cardsTotalCount}*/}
                {/*onPageChanged={onPageChanged}*/}
                {/*portionSize={pageCount}/>*/}
            </div>
        </ Window>
    )
})
