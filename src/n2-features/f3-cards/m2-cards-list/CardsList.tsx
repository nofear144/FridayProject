import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import s from "../../f1-auth/m3-reset-password/ResetPassword.module.css";
import {
    createNewCardTC, deleteCardTC, getAllCardsTC, setCardsPack_idAC,
    setCardAnswerAC, setPageAC, setPageCountAC, setSortCardsAC, updateCardTC
} from "../../../n1-main/n2-bll/reducers/cards-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Spinner} from "../../../n1-main/n1-ui/common/c5-spinner/Spinner";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {initializeTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
import {Pagination} from "../../../n1-main/n1-ui/common/pagination/paginationByIliya";
import SuperSelect from "../../../n1-main/n1-ui/common/c4-select/SuperSelect";
import style from './CardsList.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";


export const CardsList = memo(() => {
    const {status,isInitialize} = useAppSelector(state => state.app);
    const isLoggedIn = useAppSelector(state => state.login.isLogged);
    const {
        cards, page, pageCount, cardsTotalCount,
        sortCards, cardsPack_id, cardAnswer, cardQuestion
    } = useAppSelector(state => state.cards)

    const dispatch = useDispatch()

    const deleteCard = (id: string) => {
        dispatch(deleteCardTC(id))
    }
    const updateCard = (id: string) => {
        dispatch(updateCardTC(id, "UPDATED QUESTION", "UPDATED ANSWER"))
    }
    const createCard = () => {
        dispatch(createNewCardTC(cardsPack_id, "Why i must see it?", "Because", 5, 4))
    }

    const backImage = "https://www.kindpng.com/picc/m/58-583580_estrela-logo-back-button-icon-png-transparent-png.png"
    const [searchValue, setSearchValue] = useState("")
    const options = [1, 3, 5, 7, 10]

    const header = {
        question: "Question",
        answer: "Answer",
        grade: "Grade",
        updated: "Updated",
        buttons: "Actions"
    }

    let {id} = useParams<string>()
    let navigate = useNavigate();

    function handleClick() {
        navigate(PATH.PACKS_LIST);
    }

    const sortCard = (param: string) => {
        sortCards[0] === "1"
            ? dispatch(setSortCardsAC(`0${param}`))
            : dispatch(setSortCardsAC(`1${param}`))
    }
    const setPage = (value: number) => {
        dispatch(setPageAC(value))
    }
    const setPageCount = (pageCount: number) => {
        dispatch(setPageCountAC(pageCount))
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setCardAnswerAC(searchValue))
        }, 500)
        return () => clearTimeout(timer)
    }, [searchValue])

    useEffect(() => {
        id && dispatch(setCardsPack_idAC(id))
        dispatch(getAllCardsTC())
}, [cardQuestion, cardAnswer, sortCards, page, pageCount])

    useEffect(() => {
        if (!isInitialize) {
            dispatch(initializeTC())
        }
    }, [])

    if (!isInitialize) {
        return <div className={s.loader}><Spinner/></div>
    }

    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Window>
            {status === "loading" && <Loader/>}
            <div className={style.main}>
                <span className={style.image}>
                    <img src={backImage} alt="previous page" onClick={handleClick}/>
                       <h2 style={{margin: "-7px 0 20px 20px"}}>Back</h2>
                </span>

                <div className={style.header}>
                    <SuperInputText type="text" required onChangeText={setSearchValue} name={"Search"}/>
                    <SuperButton name="Create card" onClick={createCard}/>
                </div>
                <div className={style.table}>
                <Table
                    onDeleteClickHandler={deleteCard}
                    onUpdateUpdateHandler={updateCard}
                    onSortClickHandler={sortCard}
                    header={header}
                    items={cards}/>
                </div>
                <div className={style.pagination}>
                    <Pagination
                        cardsTotalCount={cardsTotalCount}
                        page={page}
                        pageCount={pageCount}
                        setPage={setPage}/>
                    {!cardsTotalCount ? null : <SuperSelect
                        name="Cards per page"
                        value={pageCount}
                        options={options}
                        onChangeOption={setPageCount}/>}
                </div>
            </div>
        </ Window>
    )
})
