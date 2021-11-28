import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import s from "../../f1-auth/m3-reset-password/ResetPassword.module.css";
import {
    getAllCardsTC,
    setCardAnswerAC,
    setCardsPack_idAC,
    setPageAC,
    setPageCountAC,
    setSortCardsAC
} from "../../../n1-main/n2-bll/reducers/cards-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Spinner} from "../../../n1-main/n1-ui/common/c5-spinner/Spinner";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {initializeTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
import {Pagination} from "../../../n1-main/n1-ui/common/c10-pagination/paginationByIliya";
import SuperSelect from "../../../n1-main/n1-ui/common/c4-select/SuperSelect";
import style from './CardsList.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import {OverlayingPopup} from "../../../n1-main/n1-ui/ui-kit/overlayingPopup/overlayingPopup";
import {CreateNewCard} from "../../../n1-main/n1-ui/ui-kit/popup/modals/createNewCard";
import {UpdateCard} from "../../../n1-main/n1-ui/ui-kit/popup/modals/updateCard";
import {DeleteCard} from "../../../n1-main/n1-ui/ui-kit/popup/modals/deleteCard";


export const CardsList = memo(() => {
    const {status, isInitialize} = useAppSelector(state => state.app);
    const [cardId, setCardId] = useState("")
    const isLoggedIn = useAppSelector(state => state.login.isLogged);
    const {
        cards, page, pageCount, cardsTotalCount,
        sortCards, cardAnswer, cardQuestion
    } = useAppSelector(state => state.cards)

    const dispatch = useDispatch()

    const deleteCard = (id: string) => {
        setShowDeletePopup(true)
        setCardId(id)
    }

    const updateCard = (id: string) => {
        setShowUpdatePopup(true)
        setCardId(id)
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

    // MODAL MENU
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const onClickShowCreate = () => setShowCreatePopup(true)
    const onClickHideCreate = () => setShowCreatePopup(false)

    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const onClickHideUpdate = () => setShowUpdatePopup(false)

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const onClickHideDelete = () => setShowDeletePopup(false)

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
                    <img style={{cursor: "pointer"}} src={backImage} alt="previous page" onClick={handleClick}/>
                       <h2 style={{margin: "-7px 0 20px 20px"}}>Back</h2>
                </span>
                <div className={style.header}>
                    <SuperInputText type="text" required onChangeText={setSearchValue} name={"Search"}/>
                    <OverlayingPopup
                        isOpened={showCreatePopup}
                        onClose={onClickHideCreate}
                        message="Create a new card">
                        <CreateNewCard onClose={onClickHideCreate}/>
                    </OverlayingPopup>

                    <OverlayingPopup
                        isOpened={showUpdatePopup}
                        onClose={onClickHideUpdate}
                        message="Update a card">
                        <UpdateCard cardId={cardId} onClose={onClickHideUpdate}/>
                    </OverlayingPopup>

                    <OverlayingPopup
                        isOpened={showDeletePopup}
                        onClose={onClickHideDelete}
                        message="Do you want to delete this card ?">
                        <DeleteCard cardId={cardId} onClose={onClickHideDelete}/>
                    </OverlayingPopup>

                    <SuperButton name="Create card" onClick={onClickShowCreate}/>
                </div>
                <div className={style.table}>
                    <Table
                        sort={sortCards}
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
