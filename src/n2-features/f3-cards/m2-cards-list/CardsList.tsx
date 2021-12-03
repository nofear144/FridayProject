import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import {
    getAllCardsTC,
    setCardAnswerAC,
    setPageAC,
    setPageCountAC,
    setSortCardsAC
} from "../../../n1-main/n2-bll/reducers/cards-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {Pagination} from "../../../n1-main/n1-ui/common/c10-pagination/Pagination";
import SuperSelect from "../../../n1-main/n1-ui/common/c4-select/SuperSelect";
import style from './CardsList.module.css'
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";
import {CreateNewCard} from "../../../n1-main/n1-ui/ui-kit/popup/modals/createNewCard";
import {UpdateCard} from "../../../n1-main/n1-ui/ui-kit/popup/modals/updateCard";
import {DeleteCard} from "../../../n1-main/n1-ui/ui-kit/popup/modals/deleteCard";
import {ModalUp} from "../../../n1-main/n1-ui/ui-kit/popup/modals/modalUp/modalUP";
import {Popup} from "../../../n1-main/n1-ui/ui-kit/popup/popup";

export const CardsList = memo(() => {
    const {status, isInitialize} = useAppSelector(state => state.app);
    const [cardId, setCardId] = useState("")
    const isLoggedIn = useAppSelector(state => state.login.isLogged);
    const {
        cards, page, pageCount, cardsTotalCount,
        sortCards, cardAnswer, cardQuestion
    } = useAppSelector(state => state.cards)

    const dispatch = useDispatch()

    let {id} = useParams<string>()
    let navigate = useNavigate();

    const previousPageImage = "https://www.kindpng.com/picc/m/58-583580_estrela-logo-back-button-icon-png-transparent-png.png"
    const cardsPerPage = [1, 3, 5, 7, 10, 20]
    const header = {
        question: "Question",
        answer: "Answer",
        grade: "Grade",
        updated: "Updated",
        buttons: ""
    }

    const [searchValue, setSearchValue] = useState("")
    // MODAL MENU
    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const onClickShowCreate = () => setShowCreatePopup(true)
    const onClickHideCreate = () => setShowCreatePopup(false)

    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const onClickHideUpdate = () => setShowUpdatePopup(false)

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const onClickHideDelete = () => setShowDeletePopup(false)

    const deleteCard = (id: string) => {
        setCardId(id)
        setShowDeletePopup(true)
        console.log(id)
    }

    const updateCard = (id: string) => {
        setShowUpdatePopup(true)
        setCardId(id)
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

    function handleClick() {
        navigate(PATH.PACKS_LIST);
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setCardAnswerAC(searchValue))
        }, 500)
        return () => clearTimeout(timer)
    }, [searchValue])

    useEffect(() => {
        id && dispatch(getAllCardsTC(id))
    }, [cardQuestion, cardAnswer, sortCards, page, pageCount])

    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (<>
            <ModalUp/>
            <Window>
                {status === "loading" && <Loader/>}
                <div className={style.main}>
                <span className={style.image}>
                    <img style={{cursor: "pointer"}} src={previousPageImage} alt="previous page" onClick={handleClick}/>
                       <h2 style={{margin: "-7px 0 20px 20px"}}>Back</h2>
                </span>
                    <div className={style.header}>
                        <SuperInputText type="text" required onChangeText={setSearchValue} name={"Search"}/>
                        <Popup
                            isOpened={showCreatePopup} onClose={onClickHideCreate}>
                            <CreateNewCard onClose={onClickHideCreate}/>
                        </Popup>
                        <Popup
                            isOpened={showUpdatePopup}
                            onClose={onClickHideUpdate}>
                            <UpdateCard cardId={cardId} onClose={onClickHideUpdate}/>
                        </Popup>
                        <Popup
                            isOpened={showDeletePopup}
                            onClose={onClickHideDelete}>
                            <DeleteCard cardId={cardId} onClose={onClickHideDelete}/>
                        </Popup>
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
                            options={cardsPerPage}
                            onChangeOption={setPageCount}/>}
                    </div>
                </div>
            </ Window>
        </>
    )
})
