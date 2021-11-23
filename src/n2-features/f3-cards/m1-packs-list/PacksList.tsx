import React, {memo, useEffect} from "react";
import {useAppSelector} from "../../../n1-main/n2-bll/store/store";
import {useDispatch} from "react-redux";

import Window from "../../f1-auth/m4-new-password/Window";
import Loader from "../../f1-auth/m3-reset-password/Loader";
import {Navigate, useNavigate} from "react-router-dom";
import {
    addPackTC,
    deletePackTC,
    getPacksTC,
    setSortPacksAC, setUserIdPacksAC,
    updatePackTC
} from "../../../n1-main/n2-bll/reducers/packs-reducer";
import {Table} from "../../../n1-main/n1-ui/common/c7-table/Table";
import SuperButton from "../../../n1-main/n1-ui/common/c1-button/SuperButton";
import s from "../../f2-profile/Profile.module.css";
import {Spinner} from "../../../n1-main/n1-ui/common/c5-spinner/Spinner";
import {PATH} from "../../../n1-main/n1-ui/routes/Routes";
import {initializeTC} from "../../../n1-main/n2-bll/reducers/login-reducer";


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

    useEffect(() => {
        if (!isInitialize) {
            dispatch(initializeTC())
        }
    }, [])
    useEffect(() => {

        dispatch(getPacksTC())
    }, [packName, minCardsCount, maxCardsCount, sortPacks, page, pageCount,user_id])

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

    const sortPackByUpdate = () => {
        sortPacks === "0updated"
            ? dispatch(setSortPacksAC("1updated"))
            : dispatch(setSortPacksAC("0updated"))
    }
    const sortPack = () => {
        sortPacks === "0updated"
            ? dispatch(setSortPacksAC("1updated"))
            : dispatch(setSortPacksAC("0updated"))
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

                <SuperButton name={"Add Pack"} onClick={addPack}/>
                <SuperButton name={"My"} onClick={myPack}/>
                <SuperButton name={"All"} onClick={allPack}/>
                <Table
                    onSortClickHandler={sortPackByUpdate}
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