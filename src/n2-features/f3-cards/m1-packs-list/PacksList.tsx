import React, {memo, useEffect, useState} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import {Navigate, useNavigate} from "react-router-dom";
import {
    addPackTC,
    deletePackTC,
    getPacksTC, setPacksNameAC,
    setSortPacksAC,
    setUserIdPacksAC,
    updatePackTC
} from "../../../n1-main/n2-bll/reducers/packs-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import s from "../../f2-profile/Profile.module.css";
import {Spinner} from "../../../n1-main/n1-ui/common/c5-spinner/Spinner";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {initializeTC} from "../../../n1-main/n2-bll/reducers/login-reducer";
import SuperInputText from "../../../n1-main/n1-ui/common/c2-input/SuperInputText";


export const PacksList = memo(() => {
    const error = useAppSelector(state => state.app.error);
    const status = useAppSelector(state => state.app.status);
    const cardPacks = useAppSelector(state => state.packs.cardPacks);
    const packName = useAppSelector(state => state.packs.packName);
    const minCardsCount = useAppSelector(state => state.packs.minCardsCount);
    const maxCardsCount = useAppSelector(state => state.packs.maxCardsCount);
    const sortPacks = useAppSelector(state => state.packs.sortPacks);
    const page = useAppSelector(state => state.packs.page);
    const pageCount = useAppSelector(state => state.packs.pageCount);
    const isInitialize = useAppSelector(state => state.app.isInitialize);
    const isLoggedIn = useAppSelector(state => state.login.isLogged);
    const _id = useAppSelector(state => state.profile._id);
    const user_id = useAppSelector(state => state.packs.user_id);
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [searchValue, setSearchValue] = useState("")
    useEffect(() => {
        if (!isInitialize) {
            dispatch(initializeTC())
        }
    }, [])
    useEffect(() => {
        dispatch(getPacksTC())
    }, [packName, minCardsCount, maxCardsCount, sortPacks, page, pageCount, user_id])
    useEffect(() => {
        let timer = setTimeout(() => dispatch(setPacksNameAC(searchValue)), 500)
        return () => clearTimeout(timer)
    }, [searchValue])


    const routeToCard = (id:string) => {
        navigate(`${PATH.CARDS_LIST}/${id}`)
    }
    const myPack = () => {
        dispatch(setUserIdPacksAC(_id))
    }
    const allPack = () => {
        dispatch(setUserIdPacksAC(""))
    }
    const deletePack = (id: string) => {
        dispatch(deletePackTC(id))
    }
    const updatePack = (id: string,) => {
        dispatch(updatePackTC(id, "DasAuto"))
    }
    const addPack = () => {
        dispatch(addPackTC("TriMushketera", false))
    }
    const sortPack = (param: string) => {
        sortPacks[0] === "1"
            ? dispatch(setSortPacksAC(`0${param}`))
            : dispatch(setSortPacksAC(`1${param}`))
    }


    if (!isInitialize) {
        return <div className={s.loader}><Spinner/></div>
    }
    if (isInitialize && !isLoggedIn) {
        return <Navigate to={PATH.LOGIN}/>
    }

    return (
        <Window>
            {status === "loading" && <Loader/>}
            <div>
                <div>
                    <SuperInputText onChangeText={setSearchValue} name={"Search"}/>
                </div>
                <SuperButton name={"Add Pack"} onClick={addPack}/>
                <SuperButton name={"My"} onClick={myPack}/>
                <SuperButton name={"All"} onClick={allPack}/>
                <Table
                    onRowClickHandler={routeToCard}
                    onSortClickHandler={sortPack}
                    onUpdateUpdateHandler={updatePack}
                    onDeleteClickHandler={deletePack}
                    items={cardPacks} header={{
                    name: "Name",
                    cardsCount: "Cards",
                    updated: "Updated",
                    user_name: "Created by",
                    buttons: ""
                }}/>
            </div>
        </ Window>
    )
})